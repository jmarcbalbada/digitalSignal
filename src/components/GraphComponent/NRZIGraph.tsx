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

interface NRZIGraphProps {
  inputData: string;
}

const NRZIGraph: React.FC<NRZIGraphProps> = ({ inputData }) => {
  const data = generateNRZIData(inputData);

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
      <Line type="monotone" dataKey="NRZ-I" stroke="#82ca9d" />
    </LineChart>
  );
};

// Function to generate NRZ-I graph data from the input string
const generateNRZIData = (inputData: string) => {
  const graphData: { index: number; "NRZ-I": number }[] = [];
  const values = inputData.split("").map(Number);
  let lastValue = 0;

  values.forEach((value, index) => {
    lastValue = value === 1 ? 1 - lastValue : lastValue; // Toggle on 1
    graphData.push({
      index: index,
      "NRZ-I": lastValue,
    });
  });

  return graphData;
};

export default NRZIGraph;
