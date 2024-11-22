import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './Main.module.scss';
import words from '../../data/words.json' assert { type: 'json' };
import { generatePhrase } from '../../utils/generateWord';
import usePuzzle from '../../hooks/usePuzzle';

import HangmanDrawing from '../HangmanDrawing/HangmanDrawing';
import PuzzleTile from '../PuzzleTile/PuzzleTile';
import Keyboard from '../Keyboard/Keyboard';

type clickType = string;
type guessesType = number;

const Main = () => {
  /*set a letter when user clicked on a keyboard*/
  const [selectedLetter, setLetter] = useState<clickType>('');

  /*keep track num of guesses*/
  const [numOfGuesses, setGuess] = useState<guessesType>(6);

  /*
    Codes below are for PuzzleTile.tsx Component
  */
  const { puzzlePhrase, setPuzzlePhrase, puzzleTiles, revealPuzzleTiles } =
    usePuzzle(generatePhrase(words));

  /*
    Codes below are for Keyboard.tsx Component
  */
  /*update selectedLetter & numOfGuesses*/
  const handleLetterAndGuess = (letterValue: string) => {
    setLetter(letterValue);

    if (
      numOfGuesses > 0 &&
      letterValue &&
      !puzzlePhrase.includes(letterValue)
    ) {
      setGuess((prevNumOfGuesses) => prevNumOfGuesses - 1);
    }
  };

  useEffect(() => {
    revealPuzzleTiles(selectedLetter);
  }, [selectedLetter, revealPuzzleTiles]);

  return (
    <div className={classNames(styles.root)}>
      <h1>Hangman Game</h1>
      <div className={classNames(styles.winLose)}>LOSE WIN</div>
      <p>{puzzlePhrase}</p>
      <p>{'Selected letter: ' + selectedLetter}</p>
      <p>{'number of lives: ' + numOfGuesses}</p>

      <HangmanDrawing />
      <PuzzleTile puzzlePhrase={puzzlePhrase} puzzleTiles={puzzleTiles} />
      <Keyboard
        setLetter={setLetter}
        handleLetterAndGuess={handleLetterAndGuess}
      />

      <button
        onClick={() => {
          setPuzzlePhrase(generatePhrase(words));
        }}
      >
        generate word
      </button>
    </div>
  );
};

export default Main;
