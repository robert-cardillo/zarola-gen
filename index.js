#!/usr/bin/env node

const rollDice = () => {
  // Return a random number between 1 and 6.
  return 1 + Math.floor(Math.random() * 6);
};

const rollDiceNTimes = (n) => {
  // Return an array of n random numbers between 1 and 6.
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push(rollDice());
  }
  return results;
};

const getWordByNumber = (number, data) => {
  // Return the word that corresponds to the given number.
  return data.filter((word) => word.numara === number)[0].kelime;
};

const run = async (wordCount, separator) => {
  // Get data from the server and generate words.
  const response = await fetch("https://zarola.oyd.org.tr/zarola.json");
  const data = await response.json();
  const words = [];
  for (let i = 0; i < wordCount; i++) {
    const number = +rollDiceNTimes(5).join("");
    words.push(getWordByNumber(number, data, words));
  }
  console.log(words.join(separator));
};

const wordCount = +process.argv.slice(2)[0] || 7;
const separator = process.argv.slice(2)[1] || "-";
run(wordCount, separator);
