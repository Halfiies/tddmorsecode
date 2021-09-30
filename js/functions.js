import { morseAlphabet } from "../data/data.js";

const validInput = /^[0-9a-z\s]+$/gi;

export const englishToMorseCode = input => {
  if (input.match(validInput) && typeof input == "string") {
    const lowerCaseInput = input.toLowerCase();
    const inputArray = Array.from(lowerCaseInput);
    const outputArray = inputArray.map(character => {
      return morseAlphabet[character];
    });
    return outputArray.join("");
  } else {
    return "Invalid input detected";
  }
};

