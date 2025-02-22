// Array of phrases to display in the typewriter effect
// const breakTag = "<br/>"

//Place the text you want displayed in the DOM inside of a string in the phrases array, and delete or comment out what you don't need.

const phrases = [
  "Hello World!",
  "Enjoy the typewriter effect.",
  "Take care.",
//   `Hi Friends, ${breakTag}${breakTag}
//  I refined the typewriter effect for enhanced realism. Implemented randomized typing speed, precise cursor positioning adjacent to the last character, and a fixed-width print area to simulate authentic, left-to-right typing on a static page.`,
];

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
  const spedUp = Math.random() * 150; //the lower the number the faster it erases
  const normalSpeed = Math.random() * 300; //the lower the value the faster it types
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed; // initial numeric value in ms will dictate the pause at the end of each phrase (when isEnd === true).  2000 would be equivalent to 2 seconds

  setTimeout(loopThroughPhrases, time);
}

// Start the typewriter effect
loopThroughPhrases();

// Clean up interval when page is unloaded
window.addEventListener("unload", () => {
  clearInterval(cursorInterval);
});
