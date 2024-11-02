import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: "#f5f5f5",
        },
        text: {
          primary: "#213547",
        },
      },
    },
    dark: {
      palette: {
        background: {
          body: "#0b0d0e",
        },
        text: {
          primary: "#ffffff",
        },
      },
    },
  },
  typography: {
    h1: {
      background:
        "linear-gradient(-30deg, var(--joy-palette-primary-700), var(--joy-palette-primary-400))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
  components: {
    Button: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          border: "1px solid transparent",
          padding: "0.6em 1.2em",
          fontSize: "1em",
          fontWeight: 500,
          cursor: "pointer",
          transition: "border-color 0.25s, background-color 0.25s",
          "&:hover": {
            backgroundColor: "rgba(100, 108, 255, 0.1)",
            borderColor: "#646cff",
          },
        },
      },
    },
  },
});

export default theme;
