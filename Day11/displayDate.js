function displayCurrentDate(times) {
  for (let i = 0; i <= times; i++) {
    const now = new Date();

    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const yyyy = now.getFullYear();

    console.log(`${dd}-${mm}-${yyyy}`);
  }
}

// Example usage: display the current date 5 times
displayCurrentDate(5);
