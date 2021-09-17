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
  p: ".--.  ",
  q: "--.-   ",
  r: ".-.   ",
  s: "...",
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

const alphabetMorse = {
  return Object.keys(morseAlphabet).reduce((ret, key) =>{
    ret[morseAlphabet[key]]= key;
    return ret
  });
};
console.log(alphabetMorse)
// return the value when a key is entered
//input innto an array
const english = document.querySelector(".english")
const morseCode = document.querySelector(".morseCode")
const translate = document.querySelector(".translate")

export const englishToMorseCode = (input) => {
 const inputArray = Array.from(input);
 const outputArray = inputArray.map(character => {
    return morseAlphabet[character]}
   // compares input to key and returns value for each
 );
 return outputArray.toString();

};

let letter = "a";
console.log(letter)
console.log(morseAlphabet[letter])
// split an entered string into 