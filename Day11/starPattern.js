function printPattern(n) {
  if (typeof n !== "number" || n < 1 || n > 5 || !Number.isInteger(n)) {
    throw new Error("Input must be an integer between 1 and 5.");
  }

  for (let i = n; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
}

try {
  const input = Number(process.argv[2]);
  printPattern(input);
} catch (error) {
  console.error("Error:", error.message);
}
