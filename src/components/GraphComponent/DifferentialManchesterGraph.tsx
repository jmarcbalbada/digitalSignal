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

interface DifferentialManchesterGraphProps {
  inputData: string;
}

const DifferentialManchesterGraph: React.FC<
  DifferentialManchesterGraphProps
> = ({ inputData }) => {
  const data = generateDifferentialManchesterData(inputData);

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
      <Line
        type="step"
        dataKey="Differential Manchester"
        stroke="#00C49F"
        dot={false}
      />
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

// Function to generate Differential Manchester graph data
const generateDifferentialManchesterData = (inputData: string) => {
  const graphData: { index: number; "Differential Manchester": number }[] = [];
  let currentState = 1; // Start with a high state (1)

  inputData.split("").forEach((bit, index) => {
    if (bit === "0") {
      // Transition at the beginning for 0
      graphData.push({
        index: index,
        "Differential Manchester": currentState,
      });
      currentState = -currentState; // Toggle state after the transition
      graphData.push({
        index: index + 0.5, // Center of the interval
        "Differential Manchester": currentState,
      });
    } else {
      // No transition at the beginning for 1
      graphData.push({
        index: index,
        "Differential Manchester": currentState,
      });
      graphData.push({
        index: index + 0.5, // Center of the interval
        "Differential Manchester": currentState,
      });
      currentState = -currentState; // Toggle state after the center
    }
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

export default DifferentialManchesterGraph;
