import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    reactDark: '#282A31',
    trans: {
      gray: '#A0AEC020',
      blue: {
        300: '#63B3ED60',
        400: '#4299E160',
        500: '#3182CE60',
        600: '#2A69AC60',
        700: '#1E4E8C60'
      }
    },
    bgCover0: '#1A202C11',
    bgCover: '#1A202C88',
    bgCover2: '#1A202CDD',
    bgCover3: '#1A202CCC',
    bgCover4: '#1A202CBB',
    matte: {
      bg: '#26272B',
      1: '#293556',
      2: '#2E4583',
      3: '#3E60C1',
      4: '#5983FC'
    }
  },
  fonts: {
    body: "Zen Kaku Gothic New, system-ui, sans-serif",
  },
  fontWeights: {
    light: 400,
    normal: 500,
    medium: 500,
    semibold: 700,
    bold: 700,
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