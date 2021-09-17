import {englishToMorseCode} from "./functions.js";
// function must return a . when the letter e is inputted
describe("testing englishToMorseCode()", () => {
  it("should translate e to .   ", () => {
    // ARRANGE
    let result;
    // ACT
    result = englishToMorseCode("e");
    // ASSERT -> TEST WILL PASS OF FAIL
    expect(result).toBe(".   ");
  });
  // each space should return and addintional 4 empty spaces
  it ("should translate  to    ", ()=> {
    let result;
    result = englishToMorseCode(" ");
    expect(result).toBe("    ")
  });
  // function should accept a string of english characters and return a string of morse characters
  // "the quick brown fox jumped over the lazy dog" 
  // "-   ....   .       --.-   ..-   ..   -.-.   -.-       -...   .-.   ---   .--   -.   ..-.   ---   -..-       .---   ..-   --   .--.   ...       ---   ...-   .   .-.       -   ....   .       .-..   .-   --..   -.--       -..   ---   --.   ..."
  it("should return correctly translated sentences in morse code", ()=>{
    let result;
    result = englishToMorseCode("the quick brown fox jumps over the lazy dogs");
    expect(result).toBe("-   ....   .       --.-   ..-   ..   -.-.   -.-       -...   .-.   ---   .--   -.       ..-.   ---   -..-       .---   ..-   --   .--.   ...       ---   ...-   .   .-.       -   ....   .       .-..   .-   --..   -.--       -..   ---   --.   ...   ")
  });
  it("should return correctly translated numbers in morse code", ()=> {
    let result;
    result = englishToMorseCode("1234567890")
    expect(result).toBe(".----   ..---   ...--   ....-   .....   -....   --...   ---..   ----.   -----   ")
  });
});
  
// if input is not valid return an error alert
