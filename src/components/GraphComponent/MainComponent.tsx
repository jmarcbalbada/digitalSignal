// MainComponent.tsx
import React from "react";
import { Box } from "@mui/joy";
import NRZLGraph from "./NRZLGraph";
import NRZIGraph from "./NRZIGraph";
import BipolarAMIGraph from "./BipolarAMIGraph";
import PseudoternaryGraph from "./PseudoternaryGraph";
import ManchesterGraph from "./ManchesterGraph";
import DifferentialManchesterGraph from "./DifferentialManchesterGraph";

interface MainComponentProps {
  inputData: string;
}

const MainComponent: React.FC<MainComponentProps> = ({ inputData }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, // 1 column on extra small, 2 on small screens
        gap: { xs: 2, lg: 4 },
        width: "100%",
        maxWidth: "1200px", // Set a max width for large screens
        mx: "auto", // Center on large screens
        padding: { xs: "10px", sm: "20px" },
        marginTop: "2.5rem",
      }}
    >
      <Box sx={{ marginBottom: "10%" }}>
        <NRZLGraph inputData={inputData} />
      </Box>
      <Box sx={{ marginBottom: "10%" }}>
        <NRZIGraph inputData={inputData} />
      </Box>
      <Box sx={{ marginBottom: "10%" }}>
        <BipolarAMIGraph inputData={inputData} />
      </Box>
      <Box sx={{ marginBottom: "10%" }}>
        <PseudoternaryGraph inputData={inputData} />
      </Box>
      <Box sx={{ marginBottom: "10%" }}>
        <ManchesterGraph inputData={inputData} />
      </Box>
      <Box sx={{ marginBottom: "10%" }}>
        <DifferentialManchesterGraph inputData={inputData} />
      </Box>
    </Box>
  );
};

export default MainComponent;
