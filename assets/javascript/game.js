var wins = 0;
var losses = 0;
var remaining = 9;
var guessed = [];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var answer = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(answer);

document.onkeyup = function(event) {
	var guess = event.key;
	guess = guess.toLowerCase();

	var check = false;
	for (var i = 0; i < alphabet.length; i++) {
		if (guess === alphabet[i]) {
			check = true;
		}
	}

	for (var i = 0; i < guessed.length; i++) {
		if (" " + guess === guessed[i]) {
			check = false;
		}
	}

	if (check) {
		if (guess === answer) {
			wins++;
			remaining = 9;
			answer = alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log(answer);
			guessed = [];
		}

		else if (remaining > 1) {
			remaining--;
			guessed.push(" " + guess);
		}

		else {
			losses++;
			remaining = 9;
			answer = alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log(answer);
			guessed = [];
		}
	}

	document.querySelector("#game").innerHTML = "Guess what letter I'm thinking of <br><br>Wins: " + wins + "<br><br>Losses: " + losses + "<br><br>Guesses Left: " + remaining + "<br><br>Your guesses so far:" + guessed;
}