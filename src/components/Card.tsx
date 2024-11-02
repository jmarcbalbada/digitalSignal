import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/joy";
import { styled } from "@mui/system";
import AspectRatio from "@mui/joy/AspectRatio";
import theme from "../theme/theme";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "calc(100% - 30%)",
  height: "400px", // Default height for smaller screens
  margin: "0px",
  position: "relative",
  overflow: "hidden",
  backgroundColor: theme.palette.background.body,
  display: "flex",
  flexDirection: "column",
  transition: "background-color 0.3s ease",

  // Apply height adjustment for screens larger than 1920x1080
  "@media (min-width: 1920px), (min-height: 1080px)": {
    height: "450px", // Height for larger screens
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  marginTop: "0.8rem",
  backgroundColor: theme.palette.background.body,
  flexGrow: 1,
  opacity: 0,
  transition: "opacity 0.3s ease",
}));

const ImageWrapper = styled(AspectRatio)(({ theme }) => ({
  transition: "opacity 0.3s ease",
  opacity: 0,
  width: "100%",
  height: "100%",
  margin: 0,
}));

const EncodingCard: React.FC<{
  title: string;
  youtubeUrl: string;
  description: string;
  imageUrl: string;
  acronym: string;
}> = ({ title, youtubeUrl, description, imageUrl, acronym }) => {
  return (
    <StyledCard variant="outlined">
      {/* Centered title as h1 by default */}
      <Typography
        level="h1"
        sx={{
          ...theme.typography.h1,
          fontWeight: 700,
          textAlign: "center",
          padding: "16px",
          margin: 0,
          marginTop: "9.0rem",
          opacity: 1, // Show acronym normally
          transition: "opacity 0.3s ease", // Add transition for opacity
        }}
      >
        {acronym}
      </Typography>

      <CardContent
        sx={{ flexGrow: 1, position: "relative", overflow: "hidden" }}
      >
        {/* ImageWrapper initially hidden */}
        <ImageWrapper ratio="2">
          <img
            src={imageUrl}
            alt={title}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              opacity: 0, // Hidden until hover
              transition: "opacity 0.3s ease",
            }}
          />
        </ImageWrapper>
      </CardContent>

      {/* Hover Effects */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "16px",
          backgroundColor: "transparent",
          opacity: 0,
          transition: "opacity 0.3s ease",
          "&:hover": {
            backgroundColor: "background",
            opacity: 1,
          },
          "&:hover img": {
            opacity: 1, // Show image on hover
          },
          "&:hover > div": {
            opacity: 1, // Show the content wrapper on hover
          },
        }}
      >
        {/* Title (visible during hover) */}
        <Typography
          level="h4"
          sx={{ fontWeight: 500, textAlign: "left", marginBottom: "10px" }}
        >
          {title}
        </Typography>

        {/* The ImageWrapper is still here for the hover effect */}
        <ImageWrapper ratio="2">
          <img
            src={imageUrl}
            alt={title}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              opacity: 1, // Keep this visible when hovered
            }}
          />
        </ImageWrapper>

        {/* Move the ContentWrapper here if you want it to show during hover */}
        <ContentWrapper>
          <Typography level="body-sm" sx={{ marginBottom: 1 }}>
            {description}
          </Typography>
          <Typography level="body-xs" textColor="text.secondary">
            {`Reference: ${youtubeUrl}`}
          </Typography>
        </ContentWrapper>
      </Box>
    </StyledCard>
  );
};

export default EncodingCard;
