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

interface BipolarAMIProps {
  inputData: string;
}

const BipolarAMI: React.FC<BipolarAMIProps> = ({ inputData }) => {
  const data = generateBipolarAMIData(inputData);

  return (
    <LineChart
      width={window.innerWidth < 600 ? 345 : 600}
      height={300}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      // For Bipolar-AMI and Pseudoternary
      <YAxis domain={[-1, 1]} ticks={[-1, 0, 1]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Bipolar AMI" stroke="#ff7300" />
    </LineChart>
  );
};

// Function to generate Bipolar AMI graph data from the input string
const generateBipolarAMIData = (inputData: string) => {
  const graphData: { index: number; "Bipolar AMI": number }[] = [];
  const values = inputData.split("").map(Number);
  let lastBipolar = 1;

  values.forEach((value, index) => {
    if (value === 1) {
      lastBipolar = lastBipolar === 1 ? -1 : 1; // Alternate between 1 and -1
      graphData.push({
        index: index,
        "Bipolar AMI": lastBipolar,
      });
    } else {
      graphData.push({
        index: index,
        "Bipolar AMI": 0,
      });
    }
  });

  return graphData;
};

export default BipolarAMI;
