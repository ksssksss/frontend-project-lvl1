import { generateRandomInteger } from '../utils.js';
import game from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getGameData = () => {
  const number1 = generateRandomInteger();
  const number2 = generateRandomInteger();
  const question = `${number1} ${number2}`;

  const correctAnswer = getGcd(number1, number2);

  return [question, correctAnswer.toString()];
};

const startGcdGame = () => game(gameTask, getGameData);

export default startGcdGame;
