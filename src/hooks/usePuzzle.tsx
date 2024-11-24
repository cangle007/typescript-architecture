import { useState, useCallback } from 'react';

type puzzleTilesType = {
  phrase: string;
  letter: string;
  revealLetter: boolean;
}[];

const usePuzzle = (phraseDetails: puzzleTilesType) => {
  const phrase: string = phraseDetails[0].phrase;

  //generate puzzle phrase for player to solve
  const [puzzlePhrase, setPuzzlePhrase] = useState(phrase);

  //initialize details to puzzle phrase
  const [puzzleTiles, setPuzzleTile] = useState<puzzleTilesType>(phraseDetails);

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
    setPuzzlePhrase,
    puzzleTiles,
    setPuzzleTile,
    updatePuzzleTiles,
  };
};

export default usePuzzle;
