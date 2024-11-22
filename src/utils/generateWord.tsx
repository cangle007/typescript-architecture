/*layout the inital puzzle phrase*/
export const generatePhrase = (words: string[]): string => {
  return words[Math.floor(Math.random() * words.length)];
};
