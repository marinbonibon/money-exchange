// PLEASE DON'T change function name
module.exports = function makeExchange (currency) {
  // Your code goes here!
  // Return an object containing the minimum number of coins needed to make change
  'use strict';
  const coinsType = [50, 25, 10, 5, 1];

  if (currency <= 0) {
    return {};
  }

  if (currency > 10000) {
    return { error: 'You are rich, my friend! We don\'t have so much coins for exchange' };
  }

  // count how much coins we need and push the result to coinsAmount array
  let coinsAmount = [];

  for (let i = 0; i < coinsType.length; i++) {
    if (currency >= coinsType[i]) {
      coinsAmount[i] = Math.floor(currency / coinsType[i]);
      currency %= coinsType[i];
    }
  }

  //declare keys for the returning object
  let coins = {
    'H': coinsAmount[0],
    'Q': coinsAmount[1],
    'D': coinsAmount[2],
    'N': coinsAmount[3],
    'P': coinsAmount[4]
  };

  //if there is no coin, delete the key from the object
  for (let key in coins) {
    if (coins[key] === undefined) {
      delete coins[key];
    }
  }

  return coins;
};
