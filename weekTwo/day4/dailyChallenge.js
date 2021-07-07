function stars() {
    let sentence = prompt("give me a sentence")
    let newSentence = sentence.split(' ')
    console.log(newSentence)
    let star = "*";
    // for (let iterator of newSentence) {
        console.log(star * newSentence[0].length)
    // }
}
stars();