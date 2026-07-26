// FizzBuzz ber kora kono vagses 0 hole
// number  % 3 === 0 fizz
// number % 5 === 0 Buzz

for (i = 1; i <= 10; i++) {
  console.log("i =>", i);
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 3 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

function FizzBuzz(number) {
  for (i = 1; i <= number; i++) {
    console.log("i =>", i);
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

FizzBuzz(20);
