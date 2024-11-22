import { useState, useEffect, useCallback, useRef } from 'react';
import classNames from 'classnames';
import styles from './PuzzleTile.module.scss';

type propsType = {
  selectedLetter: string;
  puzzlePhrase: string;
};

const PuzzleTitle: React.FC<propsType> = ({ selectedLetter, puzzlePhrase }) => {
  //update CSS custom properties dynamically
  const rootRef = useRef<HTMLDivElement>(null);

  //initialize details for puzzle phrase
  const initPuzzleTiles = puzzlePhrase.split('').map((letterform) => ({
    letter: letterform,
    revealLetter: false,
  }));

  const [puzzleTiles, setPuzzleTile] = useState(initPuzzleTiles);

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

  useEffect(() => {
    revealPuzzleTiles(selectedLetter);
  }, [selectedLetter, revealPuzzleTiles]);

  useEffect(() => {
    //set --columns as property to create dynamic column through Grid
    if (rootRef.current) {
      rootRef.current.style.setProperty(
        '--columns',
        puzzlePhrase.length.toString()
      );
    }
  }, [puzzlePhrase]);

  return (
    <div className={classNames(styles.root)}>
      <p>{puzzlePhrase}</p>

      <div className={classNames(styles.puzzlePhrase)} ref={rootRef}>
        {puzzleTiles.map((obj, i) => {
          return (
            <div
              className={classNames(styles.puzzleLetterOutline)}
              data-reveal-letter={obj.revealLetter}
              key={i}
            >
              {obj.letter}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PuzzleTitle;
