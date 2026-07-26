//Shahoj opuy

let arre =[50, 60, 55, 85, 35, 777, 800]
console.log(Math.max(...arre))//output 800

// Widthout Function
let numbers = [10, 45, 23, 89, 56];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log(largest); // 89