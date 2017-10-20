// load the game
// load the a word inside a object or array (20 objects)
// display the words as underscores 
// once the user guesses a letter for a conditional would to fill the word if an underscorce or decrement guesses left counter
//constructor ??


//load the game using prompts
//select a random word from the word object
//once word has been selected create a new instance of the word in inside a new array with the letters


// creates hangman constructor
function HangmanGame() {
  this.wordBank = ["vanilla", "chocolate","napoleon","mocha","macha","mango"];
  this.wins = 0;
  this.guessesLeft = 9;
  this.wordSelector = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
  }

var newGame = new HangmanGame();


//Word Constructor
//Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
function Word (word) {
  this.word = word;
  this.wordGuessArray = []; //place the word in a array
  this.letterMaker = function() {
    for(var i = 0; i < this.word.length;i++) {
    this.wordGuessArray[i] = this.word.charAt(i); 
   // console.log(this.wordGuessArray);
    }
  }
}
for (var i = 0; i < wordGuessArray.length; i++) {
  if(userInput === wordGuessArray.indexof(userInput)) { //lookout includes
  //array that contains random word in underscores
  //compare wordGuessArray with the underscoresArray
  wordGuessArray.splice(i,1,"");
  underscoresArray.splice(i,1,"");
  //userInput then replaces correct letter in random word
  }
}


var word = new Word(newGame.wordSelector); //takes the word from Hangman game and sticks it inside the Word Constructor
//word.letterMaker(); 

//Letter Constructor
// Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
function Letter(word){
  this.letterArray = [];
  this.word = word;
  this.wordDashes = function(){ //results _ _ _ _ _ _ based on word selected from hangman game object
    for (var i = 0; i < this.word.length; i++){
        
      // this.letterArray.push(i);

      // console.log(letterArray);
      //this.letterArray[i] = "_";
            
    }
      
  };
}


//randomizers

// console.log(wordSelector);







// // //load game  using prompt npm
// var prompt = require("prompt");
// var colors =require("colors/safe");

// prompt.message=colors.green("?"); // removes prompt and replace with "?"


// prompt.start();
 
//   // 
//   // Get two properties from the user: username and email 
//   // 
//   prompt.get({
//     properties: {
//       name: {
//         description: colors.white("Guess a Letter ?") //input message
//       }
//     }
//   }, function (err, result) { //results

//     //enter code... for hangman

//     console.log(colors.cyan("You guessed wrong"));
//   });



