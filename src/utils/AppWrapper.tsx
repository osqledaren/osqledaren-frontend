import React, { FunctionComponent, ReactNode } from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../styles/theme';
import 'normalize.css';
import '../styles/fonts.css';

interface Props {
  element: ReactNode;
}

const AppWrapper: FunctionComponent<Props> = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export default AppWrapper;
