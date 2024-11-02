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
      <CartesianGrid strokeDasharray="3 3" />
      <YAxis domain={[-1, 1]} ticks={[-1, 0, 1]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Pseudoternary" stroke="#413ea0" />
    </LineChart>
  );
};

// Function to generate Pseudoternary graph data from the input string
const generatePseudoternaryData = (inputData: string) => {
  const graphData: { index: number; Pseudoternary: number }[] = [];
  const values = inputData.split("").map(Number);

  values.forEach((value, index) => {
    graphData.push({
      index: index,
      Pseudoternary: value === 0 ? (index % 2 === 0 ? 1 : -1) : 0,
    });
  });

  return graphData;
};

export default PseudoternaryGraph;
