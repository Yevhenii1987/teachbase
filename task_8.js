let human = Object.create({}, {
    firstName: {
        value: 'Max',
        writable: true
    },
    lastName: {
        value: 'Smith',
        writable: true
    },
    fullName: {
        get: function () {
            return `${this.firstName} ${this.lastName}`
        },
        set: function (value) {
            [this.firstName, this.lastName] = value.split(' ')
        }
    },
    dateOfBirth: {
        set: function (value) {
            this.age = Math.floor((Date.now() - new Date(value)) / (365.25 * 24 * 3600 * 1000))
        }
    }
})

human.dateOfBirth = '1999-11-23'

console.log(human.age)

console.log(human.fullName)

human.fullName = 'John Abrams'

console.log(human.fullName)