// Without function

// let str ="programing"
// let revers =""
// for (i =str.length -1; i >= 0 ; i--){
//     console.log('i =>', i,str[i])
//     revers = revers + str[i]
// }
// console.log('revers =',revers)


// With function
function reversWidth(letter){
     backletter = ""

    for (i =letter.length -1; i >= 0 ; i--){
    console.log('i =>', i, letter[i])
    backletter += letter[i]
    }
    return backletter
}
let reversWord =reversWidth('Programnninghero')
console.log(reversWord)
console.log(reversWidth('Tamim'))

// simple woy 
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"