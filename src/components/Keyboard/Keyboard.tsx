import { useState } from 'react';
import classNames from 'classnames';
import styles from './Keyboard.module.scss';
import alphabet from '../../data/alphabet.json';

type propsType = {
  setLetter: (value: string) => void;
};

const Keyboard: React.FC<propsType> = ({ setLetter }) => {
  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.border)}>
        {alphabet.map((letter, i) => {
          return (
            <div
              className={classNames(styles.letterItem)}
              data-value={letter}
              key={i}
              onClick={(e) => {
                const target = e.target as HTMLDivElement; // Cast target to HTMLDivElement
                const value = target.getAttribute('data-value') ?? '';
                setLetter(value);
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
