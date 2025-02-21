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
            currentPhrase.push(phrases[i][j]) 
            j++;
            console.log(currentPhrase);
            textDisplay.innerHTML = currentPhrase.join("") + "|";;
        }  
        
        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop();
            j--;
            textDisplay.innerHTML = currentPhrase.join("") + "|";
        }
        
        if (j == phrases[i].length) {
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;

            if( i === phrases.length) {
                i = 0;
            } 
        }
    }

  
   
    const time = 100;
    setTimeout(loop, time) 
}

loop();
