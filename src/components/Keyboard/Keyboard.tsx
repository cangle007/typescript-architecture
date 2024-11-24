import classNames from 'classnames';
import styles from './Keyboard.module.scss';
import alphabet from '../../data/alphabet.json';

type propsType = {
  handleLetterAndGuess: (value: string) => void;
};

const Keyboard: React.FC<propsType> = ({ handleLetterAndGuess }) => {
  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.border)}>
        {alphabet.map((letter, i) => {
          return (
            <div
              className={classNames(styles.letterItem)}
              data-letter={letter}
              key={i}
              onClick={(e) => {
                const target = e.target as HTMLDivElement; // Cast target to HTMLDivElement
                const letterValue = target.getAttribute('data-letter') ?? '';
                handleLetterAndGuess(letterValue);
              }}
            >
              {letter}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
