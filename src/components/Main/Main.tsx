import { useState } from 'react';
import classNames from 'classnames';
import styles from './Main.module.scss';

import HangmanDrawing from '../HangmanDrawing/HangmanDrawing';
import HangmanWord from '../HangmanWord/HangmanWord';
import Keyboard from '../Keyboard/Keyboard';

import words from '../../data/words.json';

type wordToGuestType = string;

const Main = () => {
  const randomWord = (): string => {
    return words[Math.floor(Math.random() * words.length)];
  };
  const [wordToGuess, setWordToGuess] = useState<wordToGuestType>(randomWord());

  return (
    <div className={classNames(styles.root)}>
      <h1>Hangman Game</h1>
      <div className={classNames(styles.winLose)}>LOSE WIN</div>
      <p>{wordToGuess}</p>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />

      <button
        onClick={() => {
          setWordToGuess(randomWord());
        }}
      >
        generate word
      </button>
    </div>
  );
};

export default Main;
