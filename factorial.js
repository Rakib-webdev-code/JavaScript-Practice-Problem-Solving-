//Width out function
let number = 1;
for(i = 1 ; i <= 5; i++){
    number = number * i
}
console.log(number)


//Width function
function factorial(num){
  result = 1
  for(i = 1 ; i <= num ; i++){
    result = result * i
  }
  return result
}
let factorialResult = factorial(9)
console.log(factorialResult)