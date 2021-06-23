function reverseWord(word) {
    let result = []
    const letters = word.split('')
    for(let i = letters.length; i >= 0 ; i--) {
        result.push(letters[i])
    }
    return result.join('')
}
console.log(reverseWord('world'))