import generateRandomNumber from '../generateRandomNumber.js';
import game from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = generateRandomNumber(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const startEvenNumberGame = () => game(description, generateRound);

export default startEvenNumberGame;
