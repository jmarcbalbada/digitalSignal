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
      <CartesianGrid strokeDasharray="1 3" />
      <XAxis
        dataKey="index"
        tickCount={data.length}
        interval={0}
        tickFormatter={(tick) => inputData[tick]} // Display the bit value at each tick
      />
      <YAxis domain={[-1, 1]} ticks={[-1, 0, 1]} />
      <Tooltip />
      <Legend />
      <Line
        type="step"
        dataKey="Bipolar AMI"
        stroke="#ff7300"
        dot={false}
        strokeWidth={2}
      />
    </LineChart>
  );
};

// Function to generate Bipolar AMI graph data
const generateBipolarAMIData = (inputData: string) => {
  const graphData: { index: number; "Bipolar AMI": number }[] = [];
  const values = inputData.split("").map(Number);
  let lastBipolar = 1;

  values.forEach((value, index) => {
    if (value === 1) {
      // Alternate between 1 and -1 for each 1-bit
      lastBipolar = lastBipolar === 1 ? -1 : 1;
      graphData.push({
        index: index,
        "Bipolar AMI": lastBipolar,
      });
    } else {
      // Set to 0 for 0-bit (no transition)
      graphData.push({
        index: index,
        "Bipolar AMI": 0,
      });
    }
  });

  return graphData;
};

export default BipolarAMI;
