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
      <CartesianGrid strokeDasharray="1 3" />
      <XAxis
        dataKey="index"
        tickCount={data.length}
        interval={0}
        tickFormatter={(tick) => inputData[tick]} // Display the bit value at each tick
      />
      <YAxis domain={[0, 1]} ticks={[0, 1]} />
      <Tooltip />
      <Legend />
      <Line
        type="step"
        dataKey="NRZ-I"
        stroke="#82ca9d"
        dot={false}
        strokeWidth={2}
      />
    </LineChart>
  );
};

// Function to generate NRZ-I graph data with uniform distribution
const generateNRZIData = (inputData: string) => {
  const graphData: { index: number; "NRZ-I": number }[] = [];
  const values = inputData.split("").map(Number);
  let lastValue = 0;

  values.forEach((value, index) => {
    // Toggle the current level on a 1-bit, retain the level on a 0-bit
    lastValue = value === 1 ? 1 - lastValue : lastValue;

    // Add one data point per bit, and show the current level for each bit
    graphData.push({ index: index, "NRZ-I": lastValue });
  });

  return graphData;
};

export default NRZIGraph;
