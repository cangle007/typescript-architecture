import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './Main.module.scss';
import words from '../../data/words.json' assert { type: 'json' };
import { generatePhrase } from '../../utils/generateWord';
import usePuzzle from '../../hooks/usePuzzle';
import useNewGame from '../../hooks/useNewGame';

import HangmanDrawing from '../HangmanDrawing/HangmanDrawing';
import PuzzleTile from '../PuzzleTile/PuzzleTile';
import Keyboard from '../Keyboard/Keyboard';

type clickType = string;
type guessesType = number;
const ATTEMPT: number = 6;

const Main = () => {
  /*set a letter when user clicked on a keyboard*/
  const [selectedLetter, setLetter] = useState<clickType>('');
  const [numOfGuesses, setGuess] = useState<guessesType>(0);

  const {
    puzzlePhrase,
    puzzleTiles,
    updatePuzzleTiles,
    setPuzzlePhrase,
    setPuzzleTile,
  } = usePuzzle(generatePhrase(words));

  const { startNewGame } = useNewGame(
    generatePhrase(words),
    setPuzzlePhrase,
    setPuzzleTile,
    numOfGuesses,
    setGuess
  );

  /*update selectedLetter & numOfGuesses*/
  const handleLetterAndGuess = (letterValue: string) => {
    if (numOfGuesses < ATTEMPT) {
      setLetter(letterValue);
    }

    //player has 6 guesses
    if (
      numOfGuesses < ATTEMPT &&
      letterValue &&
      !puzzlePhrase.includes(letterValue)
    ) {
      setGuess((prevNumOfGuesses) => prevNumOfGuesses + 1);
    }
  };

  //display the message of the game
  const displayGameResult = () => {
    const solvedPuzzle = puzzleTiles.every(
      (tile) => tile.revealLetter === true
    );

    if (numOfGuesses === ATTEMPT) {
      return 'You lost, what a loser 🤮';
    }

    if (solvedPuzzle) {
      return 'You WON!! 🏅🚀';
    }

    return null;
  };

  useEffect(() => {
    updatePuzzleTiles(selectedLetter);
  }, [selectedLetter, updatePuzzleTiles]);

  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.hangmanTitle)}>
        <span>{'Hangman '}</span>
        <span>{'Game'}</span>
      </div>

      <div
        className={classNames(styles.gameResult, {
          [styles.animate]: !!displayGameResult(),
        })}
      >
        {displayGameResult()}
      </div>

      <button
        className={classNames(styles.startBtn)}
        onClick={() => {
          startNewGame();
        }}
      >
        START NEW GAME
      </button>

      {/* <p>{'puzzle to solve: ' + puzzlePhrase}</p>
      <p>{'Selected letter: ' + selectedLetter}</p>
      <p>{'number of lives: ' + numOfGuesses}</p> */}

      <HangmanDrawing numOfGuesses={numOfGuesses} />
      <PuzzleTile
        puzzlePhrase={puzzlePhrase}
        puzzleTiles={puzzleTiles}
        numOfGuesses={numOfGuesses}
      />
      <Keyboard handleLetterAndGuess={handleLetterAndGuess} />
    </div>
  );
};

export default Main;
