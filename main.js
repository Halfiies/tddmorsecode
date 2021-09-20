console.log("its linked")
const morseAlphabet = {
  a: ".-   ",
  b: "-...   ",
  c: "-.-.   ",
  d: "-..   ",
  e: ".   ",
  f: "..-.   ",
  g: "--.   ",
  h: "....   ",
  i: "..   ",
  j: ".---   ",
  k: "-.-   ",
  l: ".-..   ",
  m: "--   ",
  n: "-.   ",
  o: "---   ",
  p: ".--.   ",
  q: "--.-   ",
  r: ".-.   ",
  s: "...   ",
  t: "-   ",
  u: "..-   ",
  v: "...-   ",
  w: ".--   ",
  x: "-..-   ",
  y: "-.--   ",
  z: "--..   ",
  " ": "    ",
  "1": ".----   ",
  "2": "..---   ",
  "3": "...--   ",
  "4": "....-   ",
  "5": ".....   ",
  "6": "-....   ",
  "7": "--...   ",
  "8": "---..   ",
  "9": "----.   ",
  "0": "-----   ",
}
const alphabetMorse ={
  ".-   ": "a",
  "-...   ": "b",
  "-.-.   ": "c",
  "-..   ": "d",
  ".   ": "e",
  "..-.   ": "f",
  "--.   ": "g",
  "....   ": "h",
  "..   ": "i",
  ".---   ": "j",
  "-.-   ": "k",
  ".-..   ": "l",
  "--   ": "m",
  "-.   ": "n",
  "---   ": "o",
  ".--.   ": "p",
  "--.-   ": "q",
  ".-.   ": "r",
  "...   ": "s",
  "-   ": "t",
  "..-   ": "u",
  "...-   ": "v",
  ".--   ": "w",
  "-..-   ": "x",
  "-.--   ": "y",
  "--..   ": "z",
  "    ": " ",
  ".----   ": "1",
  "..---   ": "2",
  "...--   ": "3",
  "....-   ": "4",
  ".....   ": "5",
  "-....   ": "6",
  "--...   ": "7",
  "---..   ": "8",
  "----.   ": "9",
  "-----   ": "0",
 }
// return the value when a key is entered
//input innto an array
// const english = document.querySelector(".english")
// const morseCode = document.querySelector(".morseCode")
// const translate = document.querySelector(".translate")
const validInput = /^[0-9a-z\s]+$/gi;
let inputString = document.querySelector("#english")
let outputString = document.querySelector("#morseCode")
const button = document.querySelector("#translate")
const englishToMorseCode = (input) => {
 console.log(input);
if ((input.match(validInput)) && typeof(input)=="string") {
    const lowerCaseInput = input.toLowerCase() 
    const inputArray = Array.from(lowerCaseInput);
    const outputArray = inputArray.map(character => {
       return morseAlphabet[character]});
       
 
  
    return outputArray.join("");
  }
  else {
   
   return "Invalid input detected"
  }
};
button.addEventListener("click", function() {
  console.log("clicking");
  console.log(inputString.value);
  const output = englishToMorseCode(inputString.value);
  outputString.value = output;
});
// let letter = "a";
// console.log(letter)
// console.log(morseAlphabet[letter])
// script for button to convert the input


