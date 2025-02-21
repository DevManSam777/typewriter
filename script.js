// Javascript Typewriter Effect

const textDisplay = document.getElementById("text");
let currentPhrase = [];
let i = 0;
let j = 0;
let isDeleting = false;
let isEnd = false;

const phrases = ["Hello World!", "Enjoy the typewriter effect.", "Take care."];

function loop() {
  isEnd = false;

  textDisplay.innerHTML = phrases[0];
  // console.log('print');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      // console.log(currentPhrase);
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;

      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * 150;
  const normalSpeed = Math.random() * 400;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();
