import classNames from 'classnames';
import { useState } from 'react';
import Card from './components/Card';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <main
      className={classNames({
        'h-full grid grid-cols-1 place-items-center': true,
      })}
    >
      <Card isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </main>
  );
}

export default App;
