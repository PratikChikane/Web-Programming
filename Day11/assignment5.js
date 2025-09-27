
function multiplyPositiveNumbers(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 > 0 && num2 > 0) {
      resolve(num1 * num2);
    } else {
      reject("Both numbers must be positive.");
    }
  });
}

// Read input from command line arguments
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

multiplyPositiveNumbers(num1, num2)
  .then(result => {
    console.log(`Result: ${result}`);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
