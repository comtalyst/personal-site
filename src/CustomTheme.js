import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    reactDark: '#20232a',
  },
  fonts: {
    body: "system-ui, sans-serif",
  },
};

export default customTheme;