import { useState } from 'react';
import classNames from 'classnames';
import styles from './Keyboard.module.scss';
import alphabet from '../../data/alphabet.json';

const Keyboard = () => {
  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.border)}>
        {alphabet.map((letter, i) => {
          return (
            <div className={classNames(styles.letterItem)} key={i}>
              {letter}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
