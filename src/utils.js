export const isEven = (number) => number % 2 === 0;

export const generateRandomInteger = (min = 1, max = 100) => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

export const isPrimeNumber = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};
