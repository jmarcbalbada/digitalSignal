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
      <YAxis domain={[0, 1]} ticks={[0, 1]} />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Differential Manchester"
        stroke="#00C49F"
      />
    </LineChart>
  );
};

// Function to generate Differential Manchester graph data from the input string
const generateDifferentialManchesterData = (inputData: string) => {
  const graphData: { index: number; "Differential Manchester": number }[] = [];
  const values = inputData.split("").map(Number);
  let lastValue = 1;

  values.forEach((value, index) => {
    if (value === 1) {
      lastValue = -lastValue; // Toggle on 1
    }
    graphData.push({
      index: index,
      "Differential Manchester": lastValue,
    });
    graphData.push({
      index: index + 0.5, // for the next half-time
      "Differential Manchester": -lastValue,
    });
  });

  return graphData;
};

export default DifferentialManchesterGraph;
