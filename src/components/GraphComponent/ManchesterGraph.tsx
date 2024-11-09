import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
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
      <Line type="step" dataKey="Manchester" stroke="#ffc658" dot={false} />
      {/* Adding ReferenceLine for center of each interval */}
      {generateCenterLines(inputData).map((line, index) => (
        <ReferenceLine
          key={index}
          x={line}
          stroke="blue"
          strokeDasharray="3 3"
          label={{ value: "Center", position: "top" }}
        />
      ))}
    </LineChart>
  );
};

// Function to generate Manchester graph data
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
      index: index + 0.5, // for the next half-time (center of the interval)
      Manchester: signal[1],
    });
  });

  return graphData;
};

// Function to generate the center line positions for each interval
const generateCenterLines = (inputData: string) => {
  const lines: number[] = [];
  for (let i = 0; i < inputData.length; i++) {
    lines.push(i + 0.5); // Center of each interval
  }
  return lines;
};

export default ManchesterGraph;
