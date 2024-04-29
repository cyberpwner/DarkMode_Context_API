import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function ThemeProvider({ children }) {
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');

  const [isDarkMode, setIsDarkMode] = useState(darkThemeMq.matches);

  const memoizedTheme = useMemo(
    () => ({ isDarkMode, setIsDarkMode }),
    [isDarkMode, setIsDarkMode]
  );

  return (
    <ThemeContext.Provider value={memoizedTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
