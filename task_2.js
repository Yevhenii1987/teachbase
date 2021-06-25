const cache = function() {
    let stack = []
    return function (x, n) {
        let fromCache = false
        let value = 0
        let cacheIndex = 0;

        stack.forEach(function (item, index) {
            if ( item.x === x && item.n === n ) {
                fromCache = true
                cacheIndex = index
            }
        })

        if( fromCache ) {
            value = stack[cacheIndex].value
        } else {
            value = Math.pow(x, n)
            stack.push({
                x,
                n,
                value
            })
        }

        return { value, fromCache }
    }
}

const calculate = cache()


console.log(calculate(3, 3)) // { value: 27, fromCache: false}
console.log(calculate(2, 10)) // { value: 1024, fromCache: false}
console.log(calculate(2, 10)) // { value: 1024, fromCache: true}