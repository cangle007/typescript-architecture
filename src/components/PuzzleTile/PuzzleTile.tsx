import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './PuzzleTile.module.scss';

type propsType = {
  puzzlePhrase: string;
  puzzleTiles: {
    phrase: string;
    letter: string;
    revealLetter: boolean;
  }[];
  numOfGuesses: number;
  MAX_ATTEMPT: number;
};

const PuzzleTitle: React.FC<propsType> = ({
  puzzlePhrase,
  puzzleTiles,
  numOfGuesses,
  MAX_ATTEMPT,
}) => {
  //update CSS custom properties dynamically
  const rootRef = useRef<HTMLDivElement>(null);

  //set --columns as property to create dynamic column through Grid
  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.style.setProperty(
        '--columns',
        puzzlePhrase.length.toString()
      );
    }
  }, [puzzlePhrase]);

  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.puzzlePhrase)} ref={rootRef}>
        {puzzleTiles.map((tile, i) => {
          return (
            <div
              className={classNames(styles.puzzleLetterOutline)}
              data-reveal-letter={tile.revealLetter}
              key={i}
            >
              {tile.revealLetter || numOfGuesses === MAX_ATTEMPT
                ? tile.letter
                : ''}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PuzzleTitle;
