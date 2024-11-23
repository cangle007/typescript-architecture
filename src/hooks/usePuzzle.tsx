import { useState, useCallback } from 'react';
//import { generatePhrase } from '../utils/generateWord';

type puzzleTilesType = {
  phrase: string;
  letter: string;
  revealLetter: boolean;
}[];

const usePuzzle = (generatePhrase: puzzleTilesType) => {
  const phrase: string = generatePhrase[0].phrase;
  //generate puzzle phrase for player to solve
  const [puzzlePhrase, setPuzzlePhrase] = useState(phrase);

  //initialize details for puzzle phrase
  const [puzzleTiles, setPuzzleTile] =
    useState<puzzleTilesType>(generatePhrase);

  //update puzzleTiles object
  const updatePuzzleTiles = useCallback((selectedLetter: string) => {
    setPuzzleTile((prevTiles) => {
      return prevTiles.map((tile) => {
        return tile.letter === selectedLetter
          ? { ...tile, revealLetter: true }
          : tile;
      });
    });
  }, []);

  return {
    puzzlePhrase,
    puzzleTiles,
    setPuzzleTile,
    updatePuzzleTiles,
  };
};

export default usePuzzle;
