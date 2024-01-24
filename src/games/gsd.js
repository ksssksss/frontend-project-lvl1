import { generateRandomInteger } from '../utils.js';
import game from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  let number1 = generateRandomInteger();
  let number2 = generateRandomInteger();
  const question = `${number1} ${number2}`;

  if (number1 === number2) {
    return [question, number1.toString()];
  }

  // Алгоритм Евклида
  while ((number1 !== 0) && (number2 !== 0)) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }

  const correctAnswer = number1 + number2;

  return [question, correctAnswer.toString()];
};

const startGsdGame = () => game(gameTask, getGameData);

export default startGsdGame;
