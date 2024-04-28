import classNames from 'classnames';
import useTheme from '../hooks/useTheme';

function ToggleButton() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <button
      type="button"
      className={classNames({
        'font-bold w-full shadow rounded-full grid grid-cols-2 justify-between cursor-pointer transition-all': true,
        'bg-gray-200': !isDarkMode,
        'bg-slate-800 text-white': isDarkMode,
      })}
      onClick={() => setIsDarkMode((prevMode) => !prevMode)}
    >
      <div
        className={classNames({
          'w-full p-4 h-full text-center rounded-full shadow-lg transition-all': true,
          'bg-white': !isDarkMode,
          ' bg-slate-800 shadow-none': isDarkMode,
        })}
      >
        Light
      </div>
      <div
        className={classNames({
          'w-full p-4 h-full text-center transition-all': true,
          'rounded-full bg-slate-700': isDarkMode,
        })}
      >
        Dark
      </div>
    </button>
  );
}

export default ToggleButton;
