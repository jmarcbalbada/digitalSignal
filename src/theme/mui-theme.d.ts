// src/theme/mui.theme.d.ts
import "@mui/joy/styles";

// Extend the MUI Joy theme types
declare module "@mui/joy/styles" {
  // Extending Typography options
  interface TypographySystemOptions {
    fontFamily?: string; // Directly add fontFamily
  }

  interface TypographySystem {
    fontFamily?: string; // Ensure this is also defined here
  }

  // Extending Palette options
  interface Palette {
    customColor?: string; // Example of a custom color
    // You can add other custom palette properties as needed
  }

  interface PaletteOptions {
    customColor?: string; // Corresponding options for your custom color
    // You can add other custom palette options as needed
  }

  // Extending Components options
  interface Components {
    Button?: {
      styleOverrides?: {
        root?: {
          borderRadius?: string;
          border?: string;
          padding?: string;
          fontSize?: string;
          fontWeight?: number;
          cursor?: string;
          transition?: string;
          // Hover state should be specified correctly
          "&:hover"?: {
            backgroundColor?: string;
            borderColor?: string;
          };
        };
      };
    };
  }
}
