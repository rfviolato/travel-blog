import React, { ReactNode } from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../themes/default';

interface IThemeContextProps {
  children: ReactNode;
}

const ThemeContext: React.SFC<IThemeContextProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeContext;
