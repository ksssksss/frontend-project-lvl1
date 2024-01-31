import game from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNumber, delta, length) => {
  const progressionNumbers = [];
  progressionNumbers.push(firstNumber);
  for (let i = 1; i < length; i += 1) {
    const tempNumber = progressionNumbers[i - 1] + delta;
    progressionNumbers.push(tempNumber);
  }

  return progressionNumbers;
};

const generateRound = () => {
  const firstNumber = generateRandomNumber(1, 100);
  const delta = generateRandomNumber(2, 10);
  const length = generateRandomNumber(5, 10);
  const progressionNumbers = getProgression(firstNumber, delta, length);
  const hiddenIndex = generateRandomNumber(0, length - 1);

  const answer = progressionNumbers.splice(hiddenIndex, 1, '..');
  const question = progressionNumbers.join(' ');

  return [question, answer.toString()];
};

const startProgressionGame = () => game(description, generateRound);

export default startProgressionGame;
