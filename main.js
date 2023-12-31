//* variables
// selecting the body element
const changeBackground = document.body;

// selecting the links to change the page
const hexPage = document.getElementById("hex-page");
const rgbPage = document.getElementById("rgb-page");


// selecting the main wrappers
const hexWrapper = document.getElementById("hex-wrapper");
const rgbWrapper = document.getElementById("rgb-wrapper");


// selecting the buttons to change the background
const hexColor = document.getElementById("hex-color");
const rgbColor = document.getElementById("rgb-color");


//* adding event listener and function to the color page links
// hex page
hexPage.addEventListener("click", function () {
  if (hexPage.style.textDecoration != "underline") {
    hexWrapper.style.display = "block";
    rgbWrapper.style.display = "none";
    hexPage.style.textDecoration = "underline";
    rgbPage.style.textDecoration = "none";
    
    // changes the background color
    changeBackground.style.backgroundColor = hexColor.textContent;
  }
});

// rgb page
rgbPage.addEventListener("click", function () {
  if (rgbPage.style.textDecoration != "underline") {
    rgbWrapper.style.display = "block";
    hexWrapper.style.display = "none";
    rgbPage.style.textDecoration = "underline";
    hexPage.style.textDecoration = "none";
   
   // changes the background color
    changeBackground.style.backgroundColor = rgbColor.textContent;
  }
});

//* adding event listener and function to the color buttons
// hex button

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let randomNumberValue;

hexColor.addEventListener("click", function () {
  // saves the new background color
  let hexColorValue = "#";
  // randomly picks a value in the array and adds it to the background color above
  for (let i = 0; i < 6; i++) {
    randomNumberValue = Math.floor(Math.random() * hex.length);
    hexColorValue += hex[randomNumberValue];
  }
  // changes the text inside the button
  hexColor.textContent = hexColorValue;
  // changes the background color
  changeBackground.style.background = hexColorValue;
});

// rgb button
rgbColor.addEventListener("click", function () {
  // randomly picks a number between 0 and 255
  let a = Math.floor(Math.random() * 256);
  // randomly picks a number between 0 and 255
  let b = Math.floor(Math.random() * 256);
  // randomly picks a number between 0 and 255
  let c = Math.floor(Math.random() * 256);
  // saves the new background color
  // const rgbColorValue = "rgb(" + a + ", " + b + ", " + c + ")";
  const rgbColorValue = `rgb(${a}, ${b}, ${c})`;
  // changes the text inside the button
  rgbColor.textContent = rgbColorValue;
  // changes the background color
  changeBackground.style.background = rgbColorValue;
});

