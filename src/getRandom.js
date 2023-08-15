'use strict';

const random = require(`lodash/random`);

const getRandom = () => {
  const numbers = [];
  let index = 0;

  const randomizer = () => {
    for (; index < 4; index++) {
      const digit = index === 0 ? random(1, 9) : random(0, 9);

      if (numbers.includes(digit)) {
        randomizer();
      } else {
        numbers[index] = digit;
      }
    }

    return +numbers.join('');
  };

  return randomizer();
};

module.exports = { getRandom };
