// Array of phrases to display in the typewriter effect
const phrases = ["Hello World!", "Enjoy the typewriter effect.", "Take care."];

// Get the HTML elements
const textDisplay = document.getElementById("text");
const cursor = document.querySelector(".cursor");

// State variables
let currentPhrase = [];
let i = 0;
let j = 0;
let isDeleting = false;
let isEnd = false;
let cursorVisible = true;

// Cursor animation
function animateCursor() {
  // Toggle cursor visibility
  cursorVisible = !cursorVisible;

  // Add/remove opacity based on visibility state
  if (cursorVisible) {
    cursor.style.opacity = "1";
  } else {
    cursor.style.opacity = "0";
  }
}

// Set up cursor animation interval
const cursorInterval = setInterval(animateCursor, 400);

// Add transition for smooth cursor animation
cursor.style.transition = "all 0.15s ease";

function loopThroughPhrases() {
  isEnd = false;

  if (i < phrases.length) {
    // TYPING EFFECT
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join("");

      // Make cursor visible and add active class during typing
      cursor.style.opacity = "1";
    }

    // DELETING EFFECT
    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    // End of phrase reached
    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    // All characters deleted
    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;

      if (i === phrases.length) {
        i = 0;
      }
    }
  }

  // Timing control
  const spedUp = Math.random() * 150;
  const normalSpeed = Math.random() * 600;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;

  setTimeout(loopThroughPhrases, time);
}

// Start the typewriter effect
loopThroughPhrases();

// Clean up interval when page is unloaded
window.addEventListener("unload", () => {
  clearInterval(cursorInterval);
});
