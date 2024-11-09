import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface PseudoternaryGraphProps {
  inputData: string;
}

const PseudoternaryGraph: React.FC<PseudoternaryGraphProps> = ({
  inputData,
}) => {
  const data = generatePseudoternaryData(inputData);

  return (
    <LineChart
      width={window.innerWidth < 600 ? 345 : 600}
      height={300}
      data={data}
    >
      <CartesianGrid strokeDasharray="1 3" />
      <XAxis
        dataKey="index"
        tickCount={data.length}
        interval={0}
        tickFormatter={(tick) => inputData[tick]} // Display the bit value at each tick
      />
      <YAxis domain={[-1, 1]} ticks={[-1, 0, 1]} />
      <Tooltip />
      <Legend />
      <Line
        type="step"
        dataKey="Pseudoternary"
        stroke="#413ea0"
        dot={false}
        strokeWidth={2}
      />
    </LineChart>
  );
};

// Function to generate Pseudoternary graph data from the input string
const generatePseudoternaryData = (inputData: string) => {
  const graphData: { index: number; Pseudoternary: number }[] = [];
  let currentLevel = 1; // Start with 1 for the first zero

  inputData.split("").forEach((bit, index) => {
    if (bit === "0") {
      // Alternate between 1 and -1 for each successive '0'
      graphData.push({ index, Pseudoternary: currentLevel });
      currentLevel = -currentLevel; // Toggle level
    } else {
      // For '1', set to 0 (no line signal)
      graphData.push({ index, Pseudoternary: 0 });
    }
  });

  return graphData;
};

export default PseudoternaryGraph;
