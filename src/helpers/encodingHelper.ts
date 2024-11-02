export const generateEncodedData = (
  binaryString: string,
  technique: string
): number[] => {
  const encodedData: number[] = [];
  let currentLevel = 0; // Base level for NRZ-L

  for (let bit of binaryString) {
    switch (technique) {
      case "NRZ-L":
        currentLevel = bit === "1" ? 1 : 0;
        encodedData.push(currentLevel);
        break;
      case "NRZ-I":
        if (bit === "1") {
          currentLevel = currentLevel === 0 ? 1 : 0; // Toggle level
        }
        encodedData.push(currentLevel);
        break;
      case "Bipolar AMI":
        if (bit === "1") {
          currentLevel = currentLevel === 1 ? -1 : 1; // Alternate level
        } else {
          currentLevel = 0; // Zero for 0
        }
        encodedData.push(currentLevel);
        break;
      case "Pseudoternary":
        currentLevel = bit === "0" ? (currentLevel === 0 ? 1 : -1) : 0; // Pulse for 0, no pulse for 1
        encodedData.push(currentLevel);
        break;
      case "Manchester":
        encodedData.push(bit === "1" ? 1 : 0); // Simplified for demonstration
        encodedData.push(bit === "1" ? 0 : 1);
        break;
      case "Differential Manchester":
        if (bit === "1") {
          currentLevel = currentLevel === 0 ? 1 : 0; // Transition for '1'
        } else {
          // No transition for '0', keep current level
        }
        encodedData.push(currentLevel);
        break;
      default:
        throw new Error(`Unknown encoding technique: ${technique}`);
    }
  }

  return encodedData;
};

export const generateAllEncodedData = (
  binaryString: string
): { [key: string]: number[] } => {
  const techniques = [
    "NRZ-L",
    "NRZ-I",
    "Bipolar AMI",
    "Pseudoternary",
    "Manchester",
    "Differential Manchester",
  ];
  const allEncodedData: { [key: string]: number[] } = {};

  techniques.forEach((technique) => {
    allEncodedData[technique] = generateEncodedData(binaryString, technique);
  });

  return allEncodedData;
};
