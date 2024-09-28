var guessInput = document.getElementById("guess-input");
var guessBtn = document.getElementById("guess-btn");
var result = document.getElementById("result");

var randomNumber = Math.floor(Math.random() * 100) + 1;

guessBtn.addEventListener('click', () => {
    var guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = "Please enter a valid number between 1 and 100.";
        result.style.fontSize = "1rem";

    } else if (guess === randomNumber) {
        result.textContent = "Congratulations🎉! You guessed the number!";
        result.style.fontSize = "1rem";
    } else if (guess < randomNumber) {
        result.textContent = "Too low! Try Again.";
    } else {
        result.textContent = "Too high! Try Again.";
    }

});