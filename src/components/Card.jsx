import classNames from 'classnames';
import ToggleButton from './ToggleButton';
import useTheme from '../hooks/useTheme';
import moon from '../../public/moon.png';
import sun from '../../public/sun.png';

function Card() {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={classNames({
        'w-96 px-12 py-20 rounded-3xl shadow-md grid grid-cols-1 gap-10 place-items-center': true,
        'bg-white': !isDarkMode,
        'bg-sky-900': isDarkMode,
      })}
    >
      <img
        src={isDarkMode ? moon : sun}
        alt={isDarkMode ? 'Moon' : 'Sun'}
        className="w-40 max-w-full"
      />
      <section className="grid grid-cols-1 gap-2 place-items-center">
        <h1
          className={classNames({
            'text-3xl font-bold': true,
            'text-white': isDarkMode,
          })}
        >
          Light / Dark
        </h1>
        <p
          className={classNames({
            'w-2/3': true,
            'text-gray-500': !isDarkMode,
            'text-white': isDarkMode,
          })}
        >
          Toggle light or dark customize your interface
        </p>
      </section>

      <ToggleButton />
    </section>
  );
}

export default Card;
