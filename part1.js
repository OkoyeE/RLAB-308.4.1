// Declare an arbitrary number, n
let n = 9; // You can change this to test with different values

// Function to check if a number is prime
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Loop to find the next prime number
let nextPrime = n + 1; // Start searching from the next number
while (true) {
  if (isPrime(nextPrime)) {
    console.log(`The next prime number after ${n} is ${nextPrime}.`);
    break; // Exit the loop as soon as the next prime is found
  }
  nextPrime++; // Increment to check the next number
}
