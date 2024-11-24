import { useState } from 'react';

type guessesType = number;
type puzzleTilesType = {
  phrase: string;
  letter: string;
  revealLetter: boolean;
}[];
type setPuzzlePhraseType = (phrase: string) => void;
type setPuzzleTileType = (tile: puzzleTilesType) => void;

const useNewGame = (
  phraseDetails: puzzleTilesType,
  setPuzzlePhrase: setPuzzlePhraseType,
  setPuzzleTile: setPuzzleTileType,
  numOfGuesses,
  setGuess
) => {
  const phrase: string = phraseDetails[0].phrase;

  /*keep track num of guesses*/
  //const [numOfGuesses, setGuess] = useState<guessesType>(0);

  const startNewGame = () => {
    console.log('new Game started');
    setGuess(0); //reset num of guesses
    setPuzzlePhrase(phrase); //create new puzzle to solve
    setPuzzleTile(phraseDetails);
  };

  return { startNewGame };
};

export default useNewGame;

// import { useState } from 'react';

// type guessesType = number;
// type puzzleTilesType = {
//   phrase: string;
//   letter: string;
//   revealLetter: boolean;
// }[];
// type setPuzzlePhraseType = (phrase: string) => void;
// type setPuzzleTileType = (tile: puzzleTilesType) => void;

// const useNewGame = (
//   phraseDetails: puzzleTilesType,
//   setPuzzlePhrase: setPuzzlePhraseType,
//   setPuzzleTile: setPuzzleTileType
// ) => {
//   const phrase: string = phraseDetails[0].phrase;

//   /*keep track num of guesses*/
//   const [numOfGuesses, setGuess] = useState<guessesType>(0);

//   const startNewGame = () => {
//     console.log('new Game started');
//     setGuess(0); //reset num of guesses
//     setPuzzlePhrase(phrase); //create new puzzle to solve
//     setPuzzleTile(phraseDetails);
//   };

//   return { numOfGuesses, setGuess, startNewGame };
// };

// export default useNewGame;
