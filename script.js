// Javascript Typewriter Effect
const textDisplay = document.getElementById("text");
let currentPhrase = [];
let i = 0;
let j = 0;
let isDeleting = false;

const phrases = ["Hello World!", "Enjoy the typewriter effect.", "Take care."];

function loop() {
    textDisplay.innerHTML = phrases[0];
    console.log('print');
    

    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            console.log(currentPhrase);
            
        } 
    }

    if (j == phrases[i].length) {
        i++;
        j = 0;
    }
   
    const time = 2000;
    setTimeout(loop, time) 
}

// loop();
