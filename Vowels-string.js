// Problem 6: Count Vowels in a String
// Without function
let str = "Programming Hero"
const Vowel = "aeiou"
let count = 0
for (let i = 0; i <= str.length; i++){
    let letter = str[i]
    console.log("i,leter =", i, letter)
    if(Vowel.includes(letter)){
        console.log('vowel1')
        count++
    }
}
console.log('count =',count)

// Width function
function vowelchaker(word){
     count = 0
     vawelswords =""
     vowels ="aeiou"
     for(i = 0; i <=word.length; i++){
        letters = word[i]
        if(vowels.includes(letters)){
            count++
            vawelswords = vawelswords + letters
        }
     }
     return{
        'count':count,
        'vawelswords':vawelswords
     }
}

let VoweleReview = vowelchaker("i love bangldesh")
console.log(VoweleReview)
let VoweleReview1 = vowelchaker('Rakib islam')
console.log(VoweleReview1)
