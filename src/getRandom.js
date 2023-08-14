'use strict';

const random = require(`lodash/random`);

const getRandom = () => {
  return random(1000, 9999);
};

module.exports = { getRandom };
