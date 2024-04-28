import classNames from 'classnames';
import PropTypes from 'prop-types';
import ToggleButton from './ToggleButton';

function Card({ isDarkMode, setIsDarkMode }) {
  return (
    <section
      className={classNames({
        'w-96 px-12 py-20 rounded-3xl shadow-md grid grid-cols-1 gap-10 place-items-center': true,
        'bg-white': !isDarkMode,
        'bg-sky-900': isDarkMode,
      })}
    >
      {!isDarkMode ? (
        <img src="../../public/sun.png" alt="Sun" className="w-40 max-w-full" />
      ) : (
        <img
          src="../../public/moon.png"
          alt="Sun"
          className="w-40 max-w-full"
        />
      )}
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

      <ToggleButton isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </section>
  );
}

Card.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};

export default Card;
