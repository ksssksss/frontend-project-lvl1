import readlineSync from 'readline-sync';
import { isEven, generateRandomInteger } from '../utils.js';

const countQuestions = 3;

const evenNumbersGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < countQuestions; i += 1) {
    const questionNumber = generateRandomInteger();
    console.log(`Question: ${questionNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';
    if (correctAnswer === answer.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default evenNumbersGame;
