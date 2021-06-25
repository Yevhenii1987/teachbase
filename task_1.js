const MoneyBox = function() {
    let coins = 0
    this.addCoin = () => {
        coins++
    }
    this.getAmount = () => {
        return coins
    }
}

const box = new MoneyBox()


console.log(box.getAmount()) // 0
box.addCoin() // 1
box.addCoin() // 2
box.coins = 10 // 2
console.log(box.getAmount()) // 2