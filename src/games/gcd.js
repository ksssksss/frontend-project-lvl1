import generateRandomNumber from '../generateRandomNumber.js';
import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const generateRound = () => {
  const number1 = generateRandomNumber(0, 100);
  const number2 = generateRandomNumber(0, 100);
  const question = `${number1} ${number2}`;

  const answer = getGcd(number1, number2);

  return [question, answer.toString()];
};

const startGcdGame = () => game(description, generateRound);

export default startGcdGame;
