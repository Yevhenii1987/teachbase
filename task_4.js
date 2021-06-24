const numbers = [-20, -10, 0, 10, 20, 30]

function sortDesc(array) {
    return array.sort(function(a, b) {
        return b - a
    })
}

console.log(sortDesc(numbers))