// function stars() {
//     let sentence = prompt("give me a sentence")
//     let newSentence = sentence.split(' ')
//     console.log(newSentence)
//     let star = "*";
//     // for (let iterator of newSentence) {
//         console.log(star * newSentence[0].length)
//     // }
// }
// stars();

let sentence = prompt("give me a sentence")
let newSentence = sentence.split(' ')
console.log(newSentence)
let max = 0;
// let biggestWord = newSentence;
for (let key = 0; key < newSentence.length; key++) {
    currentWord = newSentence[key]
    if (currentWord.length > max) {
        max = currentWord.length 
        console.log(max)
        }    
}

let lineLenght = max +4;
let toShow = "";
for (let y = 1; y <= lineLenght; y++) {
    toShow +="*" 
}
console.log(toShow);

for (let key = 0; key < newSentence.length; key++) {
    let word = newSentence[key];
    let toShow = `* ${word}`
}