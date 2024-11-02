import React from "react";
import { Box, Typography } from "@mui/joy";
import EncodingCard from "../components/Card"; // Adjust the import path as necessary
import encodingData from "../data/encodingTechniques.json";

const About: React.FC = () => {
  return (
    <Box>
      <Typography
        level="h2"
        sx={{
          fontWeight: 600,
          textAlign: "center",
          paddingTop: "2rem",
          marginBottom: "2.0rem",
        }}
      >
        Encoding Techniques
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }, // 1 column on small screens, 2 on medium+
          gap: 6, // Smaller gap for compactness
          padding: 2,
          justifyContent: "center", // Center the grid items horizontally
          minHeight: "100vh", // Ensure the Box takes the full viewport height for vertical centering
          marginRight: "3.0rem",
        }}
      >
        {encodingData.map((encoding) => (
          <Box
            key={encoding.title}
            sx={{
              m: 0, // Remove margin around each card for compactness
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }} // Center each card
          >
            <EncodingCard
              title={encoding.title}
              youtubeUrl={encoding.youtubeUrl}
              description={encoding.description}
              imageUrl={encoding.imageUrl}
              acronym={encoding.acronym}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default About;
