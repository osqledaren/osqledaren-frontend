// This is the types for theme variables
export type Theme = typeof theme;

// This is where the theme variables are defined
const theme = {
  colors: {
    primary: 'green',
  },
  contentWidth: 1000,
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};

export default theme;
