function Rect(a, b) {
    this.a = a
    this.b = b
    this.perimeter = function() {
        return (this.a + this.b) * 2
    }
    this.area = function() {
        return this.a * this.b
    }
}

function Square(a) {
    this.a = a
    this.b = this.a
}

Square.prototype = new Rect()

const rect1 = new Rect(5, 10)

console.log(rect1.perimeter())
console.log(rect1.area())

const square1 = new Square(5)

console.log(square1.perimeter())
console.log(square1.area())