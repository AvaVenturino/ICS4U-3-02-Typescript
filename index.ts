/**
 * Class that defines airplane speed.
 *
 * @author Ava Venturino
 * @version 1.0
 * @since 2024-04-09
 */

import { createPrompt } from 'bun-promptx'

function factorial(numberToCalculate: number): number {
  if (numberToCalculate === 0 || numberToCalculate === 1) {
    return 1;
  } else {
      return numberToCalculate * factorial(numberToCalculate - 1);
  }
}

// Get user input
const userInput = createPrompt('Enter a number to calculate its factorial: ');
const number = parseFloat(userInput.value);

if (userInput.value === null) {
  console.log("Invaid input; nulls not allowed.")
} else {
  // parse the value as a float
  const userInputString = userInput.value
  if (isNaN(parseFloat(userInputString))) {
    console.log("Invalid input; not a number.")
  } else {
    if (number < 0) {
      console.log(`${number}! = -1`);
    } else {
      // Calculate and print factorial
      const result = factorial(number);
      console.log(`${number}! = ${result}`);
    }
  }
}
console.log("\nDone.")
