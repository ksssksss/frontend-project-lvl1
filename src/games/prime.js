import game from '../index.js';
import { generateRandomInteger, isPrimeNumber } from '../utils.js';

const MIN_NUMBER = -10;
const MAX_NUMBER = 100;

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const questionNumber = generateRandomInteger(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isPrimeNumber(questionNumber) ? 'yes' : 'no';

  return [questionNumber, correctAnswer];
};

const startPrimeGame = () => game(gameTask, getGameData);

export default startPrimeGame;
