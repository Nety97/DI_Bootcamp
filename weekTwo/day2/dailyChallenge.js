let sentence = prompt("how was the food")

let not = "not"
let bad = "bad"

let indexOfNot = sentence.indexOf(not)

let indexOfBad = sentence.indexOf(bad)

if (indexOfBad > indexOfNot){
  let newSentence = sentence.replace(sentence.substr(indexOfNot, indexOfBad), ' good')
console.log(newSentence)
}

// my brother help me in this exercise 