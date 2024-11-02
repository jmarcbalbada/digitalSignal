import React from "react";
import { Box, CssVarsProvider, Typography, ThemeProvider } from "@mui/joy";
import { Link } from "react-router-dom";
import theme from "../theme/theme";
import DarkModeToggle from "./DarkModeToggle";

const Navbar: React.FC = () => {
  return (
    <Box
      component="nav"
      sx={{
        bgcolor: "background.body",
        color: "text.primary",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        p: 2,
        boxShadow: "md",
        overflow: "hidden", // Prevent overflow
        boxSizing: "border-box", // Include padding in width calculations
      }}
    >
      <Link
        to="/"
        style={{ textDecoration: "none", color: "inherit", flexShrink: 0 }}
      >
        <Typography level="h3" sx={{ fontWeight: 500 }}>
          Digital Signals
        </Typography>
      </Link>
      <DarkModeToggle />
    </Box>
  );
};

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssVarsProvider>
      <Navbar />
    </CssVarsProvider>
  </ThemeProvider>
);

export default App;
