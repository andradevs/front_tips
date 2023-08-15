import { createContext, useContext, useState } from 'react';
import styled, { ThemeProvider as Theme } from 'styled-components';
import { light } from '../themes/light';
import { dark } from '../themes/dark';

interface IContext {
  toggleTheme(): void;
}

interface IProps {
  children: React.ReactElement;
}

export const ThemeContext = createContext<IContext | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('component must be rendered as child of ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <Theme theme={theme}>{children}</Theme>
    </ThemeContext.Provider>
  );
};
