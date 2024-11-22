import words from '../data/words.json' assert { type: 'json' };

/*layout the inital puzzle phrase*/
export const generatePhrase = (): string => {
  return words[Math.floor(Math.random() * words.length)];
};
