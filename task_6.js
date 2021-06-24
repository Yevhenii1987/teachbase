let numbers = [0,1,2,3,4,5,7,9,12,15,17,23]

function mixArray(array) {
    return array.sort(function () {
        return Math.random() - 0.5
    })
}

function mixArray2(arr) {
    let j = 0

    for(let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        [arr[j], arr[i]] = [arr[i], arr[j]]
    }

    return arr
}

console.log(mixArray(numbers))
console.log(mixArray2(numbers))