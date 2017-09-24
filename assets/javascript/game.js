var wins = 0;			//Win counter
var losses = 0;		//Loss counter
var remaining;		//Remaining guesses counter
var guessed;			//Array of letters guessed
var answer;				//Store the hidden letter

//Array of alphabet letters
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Set up game
function newGame() {
	//Start game with 9 guesses
	remaining = 9;
	//Chooses a random letter for user to guess
	answer = alphabet[Math.floor(Math.random() * alphabet.length)];
	//Emptys guessed array
	guessed = [];
}

//Waits for a key to be pressed
document.onkeyup = function(event) {
	//Stores key press to variable and makes it lowercase
	var guess = event.key.toLowerCase();

	//Variable to verify if key press is a letter
	var check = false;
	//Loop through alphabet array
	for (var i = 0; i < alphabet.length; i++) {
		//If key press is found in array
		if (guess === alphabet[i]) {
			//Confirms that key pressed was a letter
			check = true;
		}
	}

	//Loop through array of guessed letters
	for (var i = 0; i < guessed.length; i++) {
		//Checks if letter is already guessed
		if (" " + guess === guessed[i]) {
			//Letter has already been guessed
			check = false;
		}
	}

	//If key is a letter and not already guessed
	if (check) {
		//If key press is correct letter
		if (guess === answer) {
			//Increment win counter
			wins++;
			//Start a new game
			newGame();
		}

		//If key not correct but player still has guesses remaining
		else if (remaining > 1) {
			//Decrement guesses remaining
			remaining--;
			//Adds key press to guessed array
			guessed.push(" " + guess);
		}

		//Player runs out of guesses
		else {
			//Increment loss counter
			losses++;
			//Start a new game
			newGame();
		}
	}

	//Update HTML to display
	document.querySelector("#game").innerHTML = "Guess what letter I'm thinking of <br><br>Wins: " + wins + "<br><br>Losses: " + losses + "<br><br>Guesses Left: " + remaining + "<br><br>Your guesses so far:" + guessed;
}

//Start game
newGame();
