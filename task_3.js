const fruits = ['orange', 'apple', 'banana', '']

function filterByLength(array, min, max) {
    return array.filter(function(item) {
        return item.length >= min && item.length <= max
    })
}

console.log(filterByLength(fruits, 0, 5))
