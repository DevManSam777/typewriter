# Typewriter Effect
![Typewriter effect](./typewriter.gif)  
  
This project implements a typewriter effect using HTML, CSS, and JavaScript. It displays a series of phrases with a classic typewriter animation, including a blinking cursor.

## Description

The webpage displays a heading with a typewriter effect. The text animates character by character, simulating the look and feel of an old typewriter. After each phrase is displayed, it "types" backwards, deleting the text before displaying the next phrase. The phrases are cycled through continuously.

## Technologies Used

- HTML: Structures the webpage content.
- CSS: Styles the page, including the font, colors, and the blinking cursor animation.
- JavaScript: Implements the dynamic typewriter effect.

## How to Run

1.  Save the HTML code as `index.html`, the CSS code as `styles.css`, and the JavaScript code as `script.js` in the same directory.
2.  Open `index.html` in a web browser.

## Project Structure

- `index.html`: The main HTML file containing the structure of the webpage.
- `styles.css`: The CSS file containing the styling rules for the page.
- `script.js`: The JavaScript file containing the logic for the typewriter effect.

## Implementation Details

- **HTML:** The `<h1>` tag with spans for the text and cursor are used to display the typing effect.
- **CSS:** The `Special Elite` font is used for the typewriter effect. The `.cursor` class is styled to create the blinking effect using the `@keyframes` rule.
- **JavaScript:**
  - The `phrases` array stores the strings to be displayed.
  - The `loop()` function handles the animation:
    - It iterates through the `phrases` array.
    - It adds or removes characters from the `currentPhrase` array to simulate typing and deleting.
    - `setTimeout()` is used to control the animation speed, with random variations for a more realistic effect.
    - The `isDeleting` and `isEnd` flags control the animation flow.

## Customization

- **Phrases:** Change the strings in the `phrases` array in `script.js` to customize the displayed text.
- **Speed:** Adjust the values in the `setTimeout` function within `script.js` to modify the typing and deleting speeds. Smaller values mean faster typing.
- **Styling:** Modify the CSS in `styles.css` to change the font, colors, cursor style, or other visual aspects of the page.

## License

Copyright (c) 2025 Samir Shuman

This project is free to use and modify. Feel free to adapt it for your own purposes.
