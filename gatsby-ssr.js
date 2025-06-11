import { ThemeProvider } from "@emotion/react";
import theme from "./src/styles/theme"; // Adjust path to your theme object

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
