import { useState, useCallback } from 'react';

type puzzleTilesType = {
  letter: string;
  revealLetter: boolean;
}[];

const usePuzzle = (generatePhrase: string) => {
  //generate puzzle phrase for player to solve
  const [puzzlePhrase, setPuzzlePhrase] = useState<string>(generatePhrase);

  //initialize details for puzzle phrase
  const [puzzleTiles, setPuzzleTile] = useState<puzzleTilesType>(
    puzzlePhrase
      .split('')
      .map((letterform) => ({ letter: letterform, revealLetter: false }))
  );

  //update puzzleTiles object
  const revealPuzzleTiles = useCallback((selectedLetter: string) => {
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
    setPuzzlePhrase,
    revealPuzzleTiles,
  };
};

export default usePuzzle;
