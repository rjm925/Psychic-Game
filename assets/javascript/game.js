let wins = 0;			// Win counter
let losses = 0;		// Loss counter
let lives;				// Lives counter
let guessed;			// Array of letters guessed
let answer;				// Store the hidden letter

// Array of alphabet letters
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Set up game
function newGame() {
	// Start game with 9 lives
	lives = 9;
	// Chooses a random letter for user to guess
	answer = alphabet[Math.floor(Math.random() * alphabet.length)];
	// Emptys guessed array
	guessed = [];

	// Update HTML
	document.querySelector("#wins").innerHTML = wins;
	document.querySelector("#losses").innerHTML = losses;
	document.querySelector("#lives").innerHTML = lives;
}

// Waits for a key to be pressed
document.onkeyup = function(event) {
	// Stores key press to variable and makes it lowercase
	let guess = event.key.toLowerCase();

	// Variable to verify if key press is a letter
	let check = false;
	// Loop through alphabet array
	for (let i = 0; i < alphabet.length; i++) {
		// If key press is found in array
		if (guess === alphabet[i]) {
			// Confirms that key pressed was a letter
			check = true;
		}
	}

	// Loop through array of guessed letters
	for (let i = 0; i < guessed.length; i++) {
		// Checks if letter is already guessed
		if (" " + guess.toUpperCase() === guessed[i]) {
			// Letter has already been guessed
			check = false;
		}
	}

	// If key is a letter and not already guessed
	if (check) {
		// If key press is correct letter
		if (guess === answer) {
			// Increment win counter
			wins++;
			// Start a new game
			newGame();
		}

		// If key not correct but player still has lives remaining
		else if (lives > 1) {
			// Decrement lives remaining
			lives--;
			// Adds key press to guessed array
			guessed.push(" " + guess.toUpperCase());
		}

		// Player runs out of guesses
		else {
			// Increment loss counter
			losses++;
			// Start a new game
			newGame();
		}
	}

	// Update HTML
	document.querySelector("#guessed").innerHTML = `<h2>${guessed.join(" ")}</h2>`;
	document.querySelector("#lives").innerHTML = lives;
}

// Start game
newGame();