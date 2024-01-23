import { generateRandomInteger } from '../utils.js';
import game from '../index.js';

const MIN_NUMBER = 0;
const MAX_NUMBER = 10;

const operators = ['+', '-', '*'];
const gameTask = 'What is the result of the expression?';

const getGameData = () => {
  const number1 = generateRandomInteger(MIN_NUMBER, MAX_NUMBER);
  const number2 = generateRandomInteger(MIN_NUMBER, MAX_NUMBER);
  const operator = operators[generateRandomInteger(0, operators.length - 1)];

  const question = `${number1} ${operator} ${number2}`;

  let correctAnswer = 0;

  switch (operator) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      break;
  }

  return [question, correctAnswer.toString()];
};

const startCalcGame = () => game(gameTask, getGameData);

export default startCalcGame;
