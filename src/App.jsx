import classNames from 'classnames';
import { useState } from 'react';
import Card from './components/Card';
import ThemeProvider from './components/ThemeProvider';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <main
      className={classNames({
        'h-full grid grid-cols-1 place-items-center': true,
      })}
    >
      <ThemeProvider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
        <Card />
      </ThemeProvider>
    </main>
  );
}

export default App;
