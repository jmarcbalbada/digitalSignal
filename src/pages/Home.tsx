import React from "react";
import { Box, Typography, Button } from "@mui/joy";
import { Link } from "react-router-dom";
import theme from "../theme/theme";
import "../index.css";

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "85vh",
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "80vw",
          height: "400px",
          bgcolor: "background.body",
          border: "2px solid",
          borderColor: "divider",
          borderRadius: "lg",
          boxShadow: "lg",
          margin: "0",
          p: 4,
        }}
      >
        <Typography
          level="h1"
          sx={{
            ...theme.typography.h1,
            mb: 2,
            fontSize: {
              xs: "4.0rem", // Extra small screens
              sm: "4.0rem", // Small screens
              md: "4.0rem", // Medium screens
              lg: "7.0rem", // Large screens
              xl: "7.0rem", // Extra large screens
            },
          }}
        >
          Digital Signals
        </Typography>

        <Typography level="h3" sx={{ mb: 4, fontWeight: 300 }}>
          John Marc Balbada | CS323 - Data Communications and Networking
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link
            to="/start"
            style={{
              textDecoration: "none",
              cursor: 'url("/cursors/pointer.cur"), pointer',
            }}
          >
            <Button variant="outlined" color="success" sx={{ width: "20vw" }}>
              Start
            </Button>
          </Link>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              cursor: 'url("/cursors/pointer.cur"), pointer',
            }}
          >
            <Button variant="outlined" color="primary" sx={{ width: "20vw" }}>
              About
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
