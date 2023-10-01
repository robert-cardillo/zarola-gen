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

const getPhraseByNumber = (number, data) => {
  // Return the phrase object that has the given number.
  return data.filter((phrase) => phrase.numara === number)[0].kelime;
};

const run = async (phraseCount) => {
  // Get data from the server and generate phrases.
  const response = await fetch("https://zarola.oyd.org.tr/zarola.json");
  const data = await response.json();
  const phrases = [];
  for (let i = 0; i < phraseCount; i++) {
    const number = +rollDiceNTimes(5).join("");
    phrases.push(getPhraseByNumber(number, data, phrases));
  }
  console.log(phrases.join("-"));
};

const phraseCount = +process.argv.at(-1);
run(phraseCount);
