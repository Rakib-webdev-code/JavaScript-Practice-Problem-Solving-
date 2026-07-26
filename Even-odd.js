// Widthout function
let number = 20;
if(number % 2 === 0){
    console.log("Even Number")
}
else{
    console.log("odd Number")
}

// With function
function chakevenorodd(numbers){
     if(numbers % 2 === 0 ){
        return "Even Numbers"
     }
     else{
        return "odd Numders"
     }
}
console.log(chakevenorodd(50))
console.log(chakevenorodd(55))