type puzzleTileType = {
  phrase: string;
  letter: string;
  revealLetter: boolean;
};

/*layout the inital puzzle phrase*/
export const generatePhrase = (words: string[]): puzzleTileType[] => {
  const extractedWord = words[Math.floor(Math.random() * words.length)];

  return extractedWord.split('').map((letterform) => ({
    phrase: extractedWord,
    letter: letterform,
    revealLetter: false,
  }));
};
