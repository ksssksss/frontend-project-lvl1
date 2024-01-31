import generateRandomNumber from '../generateRandomNumber.js';
import game from '../index.js';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const number1 = generateRandomNumber(0, 10);
  const number2 = generateRandomNumber(0, 10);
  const operator = operators[generateRandomNumber(0, operators.length - 1)];

  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(number1, number2, operator);

  return [question, answer.toString()];
};

const startCalcGame = () => game(description, generateRound);

export default startCalcGame;
