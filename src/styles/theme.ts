// This is where the theme variables are defined
const theme = {
  colors: {
    primary: 'green',
    background: '#f4f4f4',
    branch: '#dc702d',
    english: '#374e9b',
    olGraver: '#008247',
    underhallning: '#f5c832',
    aktuellt: '#d51217',
    podcast: '#606263',
  },
  contentWidth: 1000,
  hSize: {
    '1': '2.5rem',
    '2': '2rem',
    '3': '1.7rem',
    '4': '1.5rem',
    '5': '1rem',
  },
  pSize: '1rem',
  pLineHeight: '1.5rem',
  breakpoints: {
    sm: 636,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};

// This is the types for theme variables
export type Theme = typeof theme;

export default theme;
