import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; // Create this component
import About from "./pages/About"; // Create this component
import Start from "./pages/Start"; // Create this component

const App: React.FC = () => {
  return (
    <CssVarsProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/start" element={<Start />} />
        </Routes>
      </Router>
    </CssVarsProvider>
  );
};

export default App;
