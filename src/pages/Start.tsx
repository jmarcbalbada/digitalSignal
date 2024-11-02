// Start.tsx
import React, { useState } from "react";
import InputField from "../components/Input";
import MainComponent from "../components/GraphComponent/MainComponent";
import { Box } from "@mui/joy";

const Start: React.FC = () => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (value: string) => {
    setInputData(value); // Update input data based on InputField
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
      }}
    >
      <InputField onInputChange={handleInputChange} />
      <MainComponent inputData={inputData} />
    </Box>
  );
};

export default Start;
