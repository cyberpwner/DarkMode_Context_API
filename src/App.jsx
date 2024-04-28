import classNames from 'classnames';
import Card from './components/Card';
import useTheme from './hooks/useTheme';

function App() {
  const { isDarkMode } = useTheme();

  return (
    <main
      className={classNames({
        'grid grid-cols-1 place-items-center w-full h-screen': true,
        'bg-gray-100': !isDarkMode,
        'bg-slate-800': isDarkMode,
      })}
    >
      <Card />
    </main>
  );
}

export default App;
