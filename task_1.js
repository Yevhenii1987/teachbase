let text1 = ' It is a long Established Fact that a reader will be distracted by the readable content of a page when looking at its layout '

function createWordsObjects(text) {
    const wordsArr = text.trim().split(' ')

    return wordsArr.map(function(item) {

        let isCapitalized = item.match(/[A-Z]|[А-Я]/) !== null
        return {
            word: item,
            length: item.length,
            isCapitalized
        }

    })
}

console.log(createWordsObjects(text1))