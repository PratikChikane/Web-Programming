function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const args = process.argv.slice(2);

if (args.length !== 10) {
  console.error("Please enter exactly 10 numbers.");
  process.exit(1);
}

const numbers = args.map(Number);

let sumEvenNumbers = 0;
let sumEvenIndex = 0;
let sumPrimeNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num % 2 === 0) {
    sumEvenNumbers += num;
  }
  if (i % 2 === 0) {
    sumEvenIndex += num;
  }
  if (isPrime(num)) {
    sumPrimeNumbers += num;
  }
}

console.log("Sum of even numbers:", sumEvenNumbers);
console.log("Sum of numbers at even indices:", sumEvenIndex);
console.log("Sum of prime numbers:", sumPrimeNumbers);
