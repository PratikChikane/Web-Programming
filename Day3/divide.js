const divideNumbers = function(num1, num2) {
  if (num2 === 0) {
    return "Error: Cannot divide by zero";
  }
  return num1 / num2;
};

let result1 = divideNumbers(10, 2);
console.log(result1); 

let result2 = divideNumbers(15, 4);
console.log(result2); 

let result3 = divideNumbers(8, 0);
console.log(result3); 