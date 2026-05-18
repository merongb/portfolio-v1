// TODO: FIZZBUZZ

function fizzbuzz(a) {
  if (a % 15 === 0) {
    console.log("FizzBuzz");
  } else if (a % 5 === 0) {
    console.log("Fizz");
  } else if (a % 3 === 0) {
    console.log("Buzz");
  } else {
    console.log("Number is not divisible by any");
  }
}

fizzbuzz(9);
fizzbuzz();
fizzbuzz();
fizzbuzz();
