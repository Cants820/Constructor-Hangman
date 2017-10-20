//starts the game 
//show the random word but display as _
  // -create an array of random words
  // -use Math.random to choice a word for the array

//user would input a letter
// type a letter and compare it to the -letters an array
// -correct letter would display dash
// -incorrect letter decrement guesses left

//user guess the display word above or fails

//load the game
var wordBank = ["vanilla", "chocolate","napoleon", "mocha","macha","mango"];
var wins = 0;
var guessLeft = 9;
var wordSelector = wordBank[Math.floor(Math.random() * wordBank.length)];
var wordToGuessArray = [];//an array that contains letter of the randomWord chosen
var dashesArray = [];//turns the random word letters into an array


function Letter(randomWord) {
  this.randomWord = randomWord;
  this.letterMaker = function() {
    for(var i =0; i < this.randomWord.length;i++){
       wordToGuessArray[i] = this.randomWord.charAt(i);
    }
     return wordToGuessArray;
  }
  this.letterMaker();
  this.dashesMaker = function() {
    for(var i = 0; i < this.randomWord.length;i++){
      dashesArray[i] = "_";
    }
     return dashesArray;
  }
  this.dashesMaker();
}

    
function Word(userInput){
    
  if(wordToGuessArray.includes(userInput)){
    console.log("correct letter");
    //console.log(wordsToGuessArray.includes(userInput));
    //console.log("Correct Guess " + correctGuess);
    //var correctGuess = wordsToGuessArray.splice(index,1,"");
    var index = wordToGuessArray.indexOf(userInput); //returns an index of the guessed number
    var removedElement = wordToGuessArray[index]; 
    
    wordToGuessArray[index] = ""; //results  c "" t
     
    
    dashesArray[index] = removedElement;  
    
    console.log(dashesArray);
  } else {
    console.log("Incorrect Letter");
    guessLeft--;
    console.log(guessLeft);
  }
    // console.log(correctGuess);//
    //  dashesArray.splice(i,1, correctGuess);
    // console.log(correctGuess);
}

// console.log(newGame.letterMaker());
//load game  using prompt npm
// var randomWord = new Letter(wordSelector);
  
var inquirer = require("inquirer");
function Hangman() {
    inquirer.prompt([
      {
        type:"input",
        name: "wordguess",
        message: "Please Input a Letter ?",
      }
    ]).then(function(answer) {
    console.log({dashesArray});
    Word(answer.wordguess);
    // Word(wordsToGuessArray,dashesArray,"a");
    Hangman();

    if(guessLeft <= 0){
      
      inquirer.prompt([
         {
          type: "input",
          name: "reset",
          message:"Do you play again ? (y/n)",
         } 
      ]).then(function(answer) {
         if(answer.reset === "y"){
          console.log(answer.reset);
            resetGame();
         } else {
          process.exit();
         }
      });
    }


    });
}

var newGame = new Letter(wordSelector);
Hangman();