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
    '1': '40px',
    '2': '36px',
    '3': '30px',
    '4': '24px',
    '5': '16px',
  },
  pSize: '1rem',
  pLineHeight: '1.3rem',
  pSizeXl: '1.5rem',
  pLineHeightXl: '2rem',
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
