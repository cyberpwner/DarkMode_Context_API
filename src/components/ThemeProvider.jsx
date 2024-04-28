import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
