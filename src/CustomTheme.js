import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    reactDark: '#20232a',
    trans: {
      gray: '#E2E8F020',
      blue: {
        300: '#63B3ED60',
        400: '#4299E160',
        500: '#3182CE60',
        600: '#2A69AC60',
        700: '#1E4E8C60'
      }
    }
  },
  fonts: {
    body: "system-ui, sans-serif",
  },
  fontWeights: {
    light: 350,
  },
  lineHeights: {
    normal: "normal",
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};

export default customTheme;