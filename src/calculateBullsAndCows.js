'use strict';

const { getArrayOfDigits } = require('./getArrayOfDigits');

const calculateBullsAndCows = (num, userInput) => {
  let bulls = 0;
  let cows = 0;

  const userDigits = getArrayOfDigits(userInput);
  const numDigits = getArrayOfDigits(num);

  userDigits.forEach((digit, i) => {
    if (digit === numDigits[i]) {
      bulls++;

      return;
    }

    if (numDigits.includes(digit)) {
      cows++;
    }
  });

  return {
    bulls,
    cows,
  };
};

module.exports = { calculateBullsAndCows };
