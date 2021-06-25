function Calc() {
    let cache = []
    this.operations = {
        '+': (a, b) => +a + +b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b
    }

    this.operation = (exp) => {
        let [a, operation, b] = exp.split(' ')
        let result = this.operations[operation](a, b)

        cache.push({
            operation,
            operands: [a, b],
            result
        })
        return result
    }
    this.addOperation = (operation, func) => {
        this.operations[operation] = func
    }
    this.history = () => {
        return cache
    }
    this.clearHistory = () => {
        cache = []
    }

}

const calculator = new Calc()


console.log(calculator.operation('31 + 32'))
console.log(calculator.operation('10 * 2'))
console.log(calculator.operation('10 - 2'))
calculator.addOperation('/', (a, b) => a / b)
console.log(calculator.operation('10 / 2'))
console.log(calculator.history())
calculator.clearHistory()
console.log(calculator.history())