import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import styles from './Main.module.scss';
import { generatePhrase } from '../../utils/generateWord';

import HangmanDrawing from '../HangmanDrawing/HangmanDrawing';
import PuzzleTile from '../PuzzleTile/PuzzleTile';
import Keyboard from '../Keyboard/Keyboard';

type puzzlePhraseType = string;
type clickType = string;
type guessesType = number;
type puzzleTilesType = {
  letter: string;
  revealLetter: boolean;
}[];

const Main = () => {
  const [puzzlePhrase, setPuzzlePhrase] = useState<puzzlePhraseType>(generatePhrase());

  /*set a letter when user clicked on a keyboard*/
  const [selectedLetter, setLetter] = useState<clickType>('');

  /*keep track num of guesses*/
  const [numOfGuesses, setGuess] = useState<guessesType>(6);

  /*
    Codes below are for Keyboard.tsx Component
  */

  /*update selectedLetter & numOfGuesses*/
  const handleLetterAndGuess = (letterValue: string) => {
    setLetter(letterValue);

    if (numOfGuesses > 0 && letterValue && !puzzlePhrase.includes(letterValue)) {
      setGuess((prevNumOfGuesses) => prevNumOfGuesses - 1);
    }
  };

  /*
    Codes below are for PuzzleTile.tsx Component
  */

  //initialize details for puzzle phrase
  const initPuzzleTiles = puzzlePhrase.split('').map((letterform) => ({
    letter: letterform,
    revealLetter: false,
  }));

  const [puzzleTiles, setPuzzleTile] = useState<puzzleTilesType>(initPuzzleTiles);

  //update puzzleTiles object
  const revealPuzzleTiles = useCallback((selectedLetter: string) => {
    setPuzzleTile((prevTiles) => {
      return prevTiles.map((tile) => {
        return tile.letter === selectedLetter ? { ...tile, revealLetter: true } : tile;
      });
    });
  }, []);

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
      <Keyboard setLetter={setLetter} handleLetterAndGuess={handleLetterAndGuess} />

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
