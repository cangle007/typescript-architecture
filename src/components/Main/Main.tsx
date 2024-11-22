import { useState } from 'react';
import classNames from 'classnames';
import styles from './Main.module.scss';

import HangmanDrawing from '../HangmanDrawing/HangmanDrawing';
import PuzzleTile from '../PuzzleTile/PuzzleTile';
import Keyboard from '../Keyboard/Keyboard';

import words from '../../data/words.json' assert { type: 'json' };

type puzzlePhraseType = string;
type clickType = string;
type guessesType = number;

const Main = () => {
  /*layout the inital puzzle phrase*/
  const generatePhrase = (): string => {
    return words[Math.floor(Math.random() * words.length)];
  };
  const [puzzlePhrase, setPuzzlePhrase] = useState<puzzlePhraseType>(
    generatePhrase()
  );

  /*set a letter when user clicked on a keyboard*/
  const [selectedLetter, setLetter] = useState<clickType>('');
  /*keep track num of guesses*/
  const [numOfGuesses, setGuess] = useState<guessesType>(6);

  /*update selectedLetter & numOfGuesses*/
  const handleLetterAndGuess = (letterValue: string) => {
    setLetter(letterValue);

    if (
      numOfGuesses > 0 &&
      letterValue &&
      !puzzlePhrase.includes(letterValue)
    ) {
      setGuess((prevNumOfGuesses) => {
        return (prevNumOfGuesses -= 1);
      });
    }
  };

  return (
    <div className={classNames(styles.root)}>
      <h1>Hangman Game</h1>
      <div className={classNames(styles.winLose)}>LOSE WIN</div>
      <p>{puzzlePhrase}</p>
      <p>{'Selected letter: ' + selectedLetter}</p>
      <p>{'number of lives: ' + numOfGuesses}</p>

      <HangmanDrawing />
      <PuzzleTile selectedLetter={selectedLetter} puzzlePhrase={puzzlePhrase} />
      <Keyboard
        setLetter={setLetter}
        handleLetterAndGuess={handleLetterAndGuess}
      />

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
