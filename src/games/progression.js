import game from '../index.js';
import { generateRandomInteger } from '../utils.js';

const MIN_DELTA = 2;
const MAX_DELTA = 10;
const MIN_NUMBER_COUNT = 5;
const MAX_NUMBER_COUNT = 10;

const gameTask = 'What number is missing in the progression?';

const getProgressionNumbers = (firstNumber, delta, numberCount) => {
  const progressionNumbers = [];
  progressionNumbers.push(firstNumber);
  for (let i = 1; i < numberCount; i += 1) {
    const tempNumber = progressionNumbers[i - 1] + delta;
    progressionNumbers.push(tempNumber);
  }

  return progressionNumbers;
};

const getGameData = () => {
  const firstNumber = generateRandomInteger();
  const delta = generateRandomInteger(MIN_DELTA, MAX_DELTA);
  const numberCount = generateRandomInteger(MIN_NUMBER_COUNT, MAX_NUMBER_COUNT);
  const progressionNumbers = getProgressionNumbers(firstNumber, delta, numberCount);
  const hiddenIndex = generateRandomInteger(0, numberCount - 1);

  const correctAnswer = progressionNumbers.splice(hiddenIndex, 1, '..');
  const question = progressionNumbers.join(' ');

  return [question, correctAnswer.toString()];
};

const startProgressionGame = () => game(gameTask, getGameData);

export default startProgressionGame;
