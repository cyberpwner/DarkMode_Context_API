import PropTypes from 'prop-types';
import { useMemo } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function ThemeProvider({ children, isDarkMode, setIsDarkMode }) {
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
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};

export default ThemeProvider;
