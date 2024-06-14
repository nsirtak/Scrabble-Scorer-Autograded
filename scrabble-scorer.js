
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
   console.log("Let's play some scrabble! Enter a word:");
};

// let newPointStructure;

// let simpleScorer;

// let vowelBonusScorer;

// let scrabbleScorer;

// const scoringAlgorithms = [];

// function scorerPrompt() {}

// function transform() {};

// function runProgram() {
//    initialPrompt();
   
// }
let newPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
 };
 
 function simpleScorer(word) {
   word = word.toUpperCase();
   let score = 0;
 
   for (let i = 0; i < word.length; i++) {
     for (const pointValue in newPointStructure) {
       if (newPointStructure[pointValue].includes(word[i])) {
         score += parseInt(pointValue);
       }
     }
   }
   return score;
 }
 
 function vowelBonusScorer(word) {
   word = word.toUpperCase();
   let score = 0;
 
   for (let i = 0; i < word.length; i++) {
     if (word[i] === 'A' || word[i] === 'E' || word[i] === 'I' || word[i] === 'O' || word[i] === 'U') {
       score += 2;
     } else {
       for (const pointValue in newPointStructure) {
         if (newPointStructure[pointValue].includes(word[i])) {
           score += parseInt(pointValue);
         }
       }
     }
   }
   return score;
 }
 
 function scrabbleScorer(word) {
   word = word.toUpperCase();
   let score = 0;
 
   for (let i = 0; i < word.length; i++) {
     if (word[i] === 'A' || word[i] === 'E' || word[i] === 'I' || word[i] === 'O' || word[i] === 'U') {
       score += 2;
     } else {
       for (const pointValue in newPointStructure) {
         if (newPointStructure[pointValue].includes(word[i])) {
           score += parseInt(pointValue);
         }
       }
     }
   }
   return score;
 }
 
 const scoringAlgorithms = [oldScrabbleScorer, simpleScorer, vowelBonusScorer, scrabbleScorer];
 
 function scorerPrompt() {
   console.log("Choose a scoring algorithm:");
   console.log("1. Old Scrabble Scorer");
   console.log("2. Simple Scorer");
   console.log("3. Vowel Bonus Scorer");
   console.log("4. Scrabble Scorer");
 }
 
 function transform(word) {
   let algorithmChoice = input.question("Enter the number of your chosen algorithm:");
   let chosenAlgorithm = scoringAlgorithms[algorithmChoice - 1];
   console.log(chosenAlgorithm(word));
 }
 function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
 }
 
 function runProgram() {
   initialPrompt();
   let word = input.question("Enter a word:");
   scorerPrompt();
   transform(word);
 }
 
 runProgram();

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
