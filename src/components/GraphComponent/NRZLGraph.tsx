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

interface NRZLGraphProps {
  inputData: string;
}

const NRZLGraph: React.FC<NRZLGraphProps> = ({ inputData }) => {
  const data = generateNRZLData(inputData);

  return (
    <LineChart
      width={window.innerWidth < 600 ? 345 : 600}
      height={300}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <YAxis domain={[0, 1]} ticks={[0, 1]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="NRZ-L" stroke="#8884d8" />
    </LineChart>
  );
};

// Function to generate NRZ-L graph data from the input string
const generateNRZLData = (inputData: string) => {
  const graphData: { index: number; "NRZ-L": number }[] = [];
  const values = inputData.split("").map(Number); // Convert string to array of numbers

  values.forEach((value, index) => {
    graphData.push({
      index: index,
      "NRZ-L": value,
    });
  });

  return graphData;
};

export default NRZLGraph;
