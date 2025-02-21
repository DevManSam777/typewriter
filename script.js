// Get the HTML element where the text will be displayed
const textDisplay = document.getElementById("text");
// Array to store the current phrase being typed/deleted
let currentPhrase = [];
// Index to track which phrase we're on in the phrases array
let i = 0;
// Index to track which character we're on in the current phrase
let j = 0;
// Boolean to determine if we're currently deleting characters
let isDeleting = false;
// Boolean to track if we've reached the end of a phrase
let isEnd = false;

// Array of phrases to display in the typewriter effect
const phrases = ["Hello World!", "Enjoy the typewriter effect.", "Take care."];

function loop() {
  isEnd = false;

  if (i < phrases.length) {
    // TYPING EFFECT: If we're not deleting and haven't reached the end of the phrase
    if (!isDeleting && j <= phrases[i].length) {
      // Add the next character to currentPhrase array
      currentPhrase.push(phrases[i][j]);
      j++;
      // Display the current state of the phrase
      textDisplay.innerHTML = currentPhrase.join("");
    }

    // DELETING EFFECT: If we are deleting and haven't removed all characters
    if (isDeleting && j <= phrases[i].length) {
      // Remove the last character from currentPhrase array
      currentPhrase.pop();
      j--;
      // Display the current state of the phrase
      textDisplay.innerHTML = currentPhrase.join("");
    }

    // If we've reached the end of the current phrase
    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true; // Start deleting
    }

    // If we've deleted all characters
    if (isDeleting && j === 0) {
      currentPhrase = []; // Reset the current phrase array
      isDeleting = false; // Stop deleting
      i++; // Move to next phrase

      // If we've gone through all phrases, start over
      if (i === phrases.length) {
        i = 0;
      }
    }
  }

  // TIMING CONTROL
  // Random speed between 0-150ms when deleting (faster)
  const spedUp = Math.random() * 150;
  // Random speed between 0-400ms when typing (slower)
  const normalSpeed = Math.random() * 400;
  // Determine the delay before the next character:
  // 2000ms pause at the end of a phrase
  // spedUp speed when deleting
  // normalSpeed when typing
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;

  // Schedule the next iteration of the loop
  setTimeout(loop, time);
}

// Start the typewriter effect
loop();
