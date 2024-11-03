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

interface ManchesterGraphProps {
  inputData: string;
}

const ManchesterGraph: React.FC<ManchesterGraphProps> = ({ inputData }) => {
  const data = generateManchesterData(inputData);

  return (
    <LineChart
      width={window.innerWidth < 600 ? 345 : 600}
      height={300}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <YAxis domain={[0, 1]} ticks={[0]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Manchester" stroke="#ffc658" />
    </LineChart>
  );
};

// Function to generate Manchester graph data from the input string
const generateManchesterData = (inputData: string) => {
  const graphData: { index: number; Manchester: number }[] = [];
  const values = inputData.split("").map(Number);

  values.forEach((value, index) => {
    const signal = value === 1 ? [1, -1] : [-1, 1];
    graphData.push({
      index: index,
      Manchester: signal[0],
    });
    graphData.push({
      index: index + 0.5, // for the next half-time
      Manchester: signal[1],
    });
  });

  return graphData;
};

export default ManchesterGraph;
