/* eslint-disable no-console */
'use strict';

const rl = require('readline');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const { getRandom } = require('./getRandom');

const terminal = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const number = getRandom();
let attempts = 0;

const game = () => {
  attempts++;

  terminal.question(`Attempt ${attempts}. Guess a number\n`, (input) => {
    const { bulls, cows } = calculateBullsAndCows(number, input);

    if (bulls === 4) {
      console.log(
        `Congrats! You guessed with ${attempts} attempt${
          attempts > 1 ? 's' : ''
        }`
      );
      terminal.close();

      return;
    }

    console.log(`${bulls} bulls, ${cows} cows`);

    game();
  });
};

game();
