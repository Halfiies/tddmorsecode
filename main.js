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

const validInput = /^[0-9a-z\s]+$/gi;
const englishToMorseCode = (input) => {
  console.log(input)
  console.log(input.match(validInput))
  console.log(typeof(input))
   if ((input.match(validInput)) && typeof(input)=="string") {
    
     console.log("valid")
     const lowerCaseInput = input.toLowerCase() 
     const inputArray = Array.from(lowerCaseInput);
     const outputArray = inputArray.map(character => {
        return morseAlphabet[character]});
        
   // check for not a string, invalid characters in the string 
   // if not valid return "invalid input deteced" else 
  
    // compares input to key and returns value for each
   
     return outputArray.join("");
   }
   else {
    console.log("invalid")
    console.log
    return "Invalid input detected"
   }
 };

console.log(englishToMorseCode("1234567890"));
// let letter = "a";
// console.log(letter)
// console.log(morseAlphabet[letter])
