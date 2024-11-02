import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssVarsProvider } from "@mui/joy/styles"; // Import the provider
import "./index.css";
import App from "./App";
import theme from "./theme/theme"; // Import your custom theme

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssVarsProvider theme={theme}>
      {" "}
      {/* Wrap App with CssVarsProvider */}
      <App />
    </CssVarsProvider>
  </StrictMode>
);
