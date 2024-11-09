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
      <CartesianGrid strokeDasharray="1 3" />
      <XAxis
        dataKey="index"
        tickCount={data.length}
        interval={0}
        tickFormatter={(tick) => inputData[tick]} // Show the bit value at each tick (0 or 1)
      />
      <YAxis domain={[0, 1]} ticks={[0, 1]} />
      <Tooltip />
      <Legend />
      <Line
        type="step"
        dataKey="NRZ-L"
        stroke="#df144a"
        dot={false}
        strokeWidth={2}
      />
    </LineChart>
  );
};

const generateNRZLData = (inputData: string) => {
  const graphData: { index: number; "NRZ-L": number }[] = [];
  const values = inputData.split("").map(Number);

  values.forEach((value, index) => {
    const signal = value === 1 ? 1 : 0;

    // Only create one data point per bit
    graphData.push({ index: index, "NRZ-L": signal });
  });

  return graphData;
};

export default NRZLGraph;
