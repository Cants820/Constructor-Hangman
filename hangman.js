// load the game
// load the a word inside a object or array (20 objects)
// display the words as underscores 
// once the user guesses a letter for a conditional would to fill the word if an underscorce or decrement guesses left counter
//constructor ??

// game object

var hangmanGame = {
    wordBank: ["vanilla", "chocolate","napoleon","mocha","macha"], //ice cream flavors
    wins: 0,
    guessesLeft: 9,
}

//Word Constructor

function Word (word) {
  
}



//randomizers
//var wordSelector = wordArray[Math.floor(Math.random() * wordArray.length)];
// console.log(wordSelector);





var answerArray =[] //stores the answers array

function wordDashes () {//turns selected word into dashes

  for(var i = 0; i < wordSelector.length; i++) {
    answerArray[i] = "_";
   
  }
 console.log(answerArray);
}





// //load game 
// var prompt = require("prompt");
  
// prompt.start();
 
//   // 
//   // Get two properties from the user: username and email 
//   // 
//   prompt.get(['Guess a letter'], function (err, result) {
//     // 
//     // Log the results. 
//     // 
//     console.log('Command-line input received:');
//     console.log('  username: ' + result.username);
//     console.log('  email: ' + result.email);
//   });



