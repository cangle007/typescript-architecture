import { useState } from 'react';
import classNames from 'classnames';
import styles from './Main.module.scss';

import HangmanDrawing from '../HangmanDrawing/HangmanDrawing';
import PuzzleTile from '../PuzzleTile/PuzzleTile';
import Keyboard from '../Keyboard/Keyboard';

import words from '../../data/words.json';

type puzzlePhraseType = string;
type clickType = string;

const Main = () => {
  const generatePhrase = (): string => {
    return words[Math.floor(Math.random() * words.length)];
  };
  const [puzzlePhrase, setPuzzlePhrase] = useState<puzzlePhraseType>(
    generatePhrase()
  );
  const [selectedLetter, setLetter] = useState<clickType>('');

  return (
    <div className={classNames(styles.root)}>
      <h1>Hangman Game</h1>
      <div className={classNames(styles.winLose)}>LOSE WIN</div>
      <p>{puzzlePhrase}</p>
      <p>{'Clicked letter: ' + selectedLetter}</p>

      <HangmanDrawing />
      <PuzzleTile selectedLetter={selectedLetter} puzzlePhrase={puzzlePhrase} />
      <Keyboard setLetter={setLetter} />

      <button
        onClick={() => {
          setPuzzlePhrase(generatePhrase());
        }}
      >
        generate word
      </button>
    </div>
  );
};

export default Main;
