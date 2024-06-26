// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
   word = word.toUpperCase();
   let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!");
   let word = input.question("Enter a word: ")
   return word;
};

function transform(oldPointStructure) {
   let newPointStructure = {};
   for (let point in oldPointStructure){
      for (let letter of oldPointStructure[point])
         newPointStructure[letter.toLowerCase()] = Number(point);
   }
   return newPointStructure;
};

let newPointStructure = transform(oldPointStructure);

function simpleScorer(word){
   return word.length;
}

function vowelBonusScorer(word) {
   let points = 0;
   for (let i = 0; i < word.length; i++) {
     let letter = word.toLowerCase()[i];
     if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
       points += 3;
     } else {
       points += 1;
     }
   }
   return points;
 }

function scrabbleScorer(word){
   word = word.toLowerCase().split("");
   let points = 0
   for (let i = 0; i < word.length; i++){
      points += newPointStructure[word[i]]
   }
   return points;
}

// an array of objects, where each object represents a scoring algorithm
const scoringAlgorithms = [
   {name: "Simple Score", description: "Each letter is worth 1 point.", scorerFunction: simpleScorer}, 
   {name: "Bonus Vowels", description: "Vowels are 3 pts, consonants are 1 pt.", scorerFunction: vowelBonusScorer}, 
   {name: "Scrabble", description: "The traditional scoring algorithm.", scorerFunction: scrabbleScorer}]; //oldScrabbleScorer

   // ask user to select a scoring algorithm
   function scorerPrompt(scoringAlgorithms) {
      console.log(`Which scoring algorithm would you like to use?\n`);
      for (let i = 0; i < scoringAlgorithms.length; i++) {
        console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
      }
      let num = input.question(`Enter a number (0, 1, or 2): `);
      return scoringAlgorithms[num];
    }

function runProgram() {
   let word = initialPrompt();
   let scoringAlgorithm = scorerPrompt(scoringAlgorithms);
   let score = scoringAlgorithm.scorerFunction(word);
   console.log(`Score for '${word}': ${score}`);
 }

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};