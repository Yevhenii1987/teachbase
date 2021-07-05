Array.prototype.shuffle = function() {
    let j = 0

    for(let i = this.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        [this[j], this[i]] = [this[i], this[j]]
    }

    return arr
}

const arr = [1,2,3,4,5,6,7,8,9,11,13,14,15,23,45,44,46]

console.log(arr.shuffle())