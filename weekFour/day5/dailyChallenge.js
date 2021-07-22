let wordOne = prompt('give me a word').toLowerCase()
let wordOneMod= [...wordOne].sort()
console.log(wordOneMod)
let wordTwo = prompt('give another word and i will compare if they are anagram!').toLowerCase()
let wordTwoMod = [...wordTwo].sort()
console.log(wordTwoMod)

let word1 = wordOneMod.filter(x =>{
    return x != " "
})
let word2 = wordTwoMod.filter(x => {
    return x != " "
})

function anagram(a, b) {
    for (let index = 0; index < a.length; index++) {
        if (a[index] == b[index]) {
            console.log(`its true ${wordOne} and ${wordTwo} are anagram`)

        } else{
            console.log("its false, maybe search for new words")

        }
        
    }
    
}

anagram(word1, word2)