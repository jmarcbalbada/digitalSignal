import React from "react";
import { useColorScheme } from "@mui/joy/styles";
import Button from "@mui/joy/Button";

function DarkModeToggle() {
  const { mode, setMode } = useColorScheme();

  const handleToggle = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("preferred-mode", newMode);
  };

  return (
    <Button
      variant="outlined"
      color="neutral"
      onClick={handleToggle}
      sx={{
        // Apply margin based on the screen size
        marginRight: {
          xs: "0px", // No margin for extra small devices
          sm: "50px", // 50px margin for small devices and above
        },
      }}
    >
      Switch to {mode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}

export default DarkModeToggle;
