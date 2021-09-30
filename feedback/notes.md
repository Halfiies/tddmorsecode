# Review

## Goals

1. Working morse code translator - kinda done
   - english to morse - code done, needs to be hooked up to the UI
   - morse to english - to work on
2. Practice using TDD - done
   - Got some practice writing tests first, all pass!!!!
3. Application of what you're learning (pure functions etc.) - Clean functions, and the app works - kinda done
   ​

## Specification

​

- Translator functions and Unit tests to be written in separate files. Functions to be brought into the main.js and unit test files - done
  - Has written tests and pure functions in separate files.
  - ran into problems hooking them all together which we can go over no worries.
- Readme - kinda done
  - Technically has a README although there it needs a bit of polishing.
  - Add a section about set up so if someone came to project they know how to get it and run the tests.
  ```bash
  # get project
  git clone project-url
  # go into project
  cd project-name
  # add dependencies
  npm install
  # run test scripts
  npm run test
  ```
- 10 commits during development - not done
  - 6 commits
- Mobile first/Responsive - not done
  - Not styled yet
- No tutorials - done
  - This work looks original
    ​

## Overall

​
In terms of JS you have separated your files which is great. I think you have ran into a couple of problems when doing so and thats why you had to bring them all back into one file to work. We can have a look at this.
​
The test's work so you just need to hook it up to your UI.

## To work on

### Import & export problems

In the `index.html` you need to update your script tag if you are using modules you have to specify it on the tag.

```html
<script src="./main.js" type="module"></script>
```

You can use both `export and import` in functions.js

```js
// functions.js
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
```

In main you will be able to bring in `englishToMorseCode` and use it in an event listener.

```jsx
// main.js
import { englishToMorseCode } from "./js/functions.js";

console.log(englishToMorseCode("hello world"));

// ADD EVENT LISTENER 
// GET USER INPUT
// USE FUNCTION ON INPUT -> STORE RESULT
// ADD RESULT TO THE DOM
```

### Todo

- Hook it up to the UI
- Style it
- Jazz up your readme
- Complete the extension

Hey mate a lot of little things let me know if you want a hand or a further explanation.
