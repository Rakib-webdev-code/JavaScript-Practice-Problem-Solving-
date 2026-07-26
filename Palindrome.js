//Widthout Function

let name = 'madam'
let reversname =""
for (let i = name.length - 1; i >= 0 ; i--){
    word = name[i]
    reversname = reversname + word
}
console.log(reversname)
if(name === reversname){
    console.log("ture")
}
else{
    "false"
}

// Width function
function inPalindrome(str){
    let reverse =
    str.split("").reverse().join("")
    return str === reverse
}

let strin = inPalindrome('levle')
console.log(strin)
console.log(inPalindrome('racecar'))