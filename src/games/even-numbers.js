import { isEven, generateRandomInteger } from '../utils.js';
import game from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const questionNumber = generateRandomInteger();
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

  return [questionNumber, correctAnswer];
};

const startEvenNumberGame = () => game(gameTask, getGameData);

export default startEvenNumberGame;
