const john = {
    name: "John",
    lastName: "Smith",
    position: "Senior engineer",
    startDate: "10.10.1990",
    endDate: "10.10.2000",
    baseSalary: "10000",
    salaryCurrency: "$",
    location: "Ukraine",
    department: "IT",
    phoneNumber: "+1234567890",
    eat: function() {},
    sleep: function() {},
    callFriend: function() {},
    writeReport: function() {},
    organizeMeeting: function () {},
    retire: function () {},
    startVacation: function () {}
};

function Person(name, lastName, location, phoneNumber) {
    this.name = name
    this.lastName = lastName
    this.location = location
    this.phoneNumber = phoneNumber
    this.eat = function () {
        console.log(`${this.name} is eating`)
    }
    this.sleep = function () {
        console.log(`${this.name} is sleeping`)
    }
    this.callFriend = function () {
        console.log(`${this.name} is calling to his friend`)
    }
}

function Employee(name, lastName, location, phoneNumber, position, startDate, baseSalary, salaryCurrency, department) {
    Person.call(this, name, lastName, location, phoneNumber)
    this.position = position
    this.startDate = startDate
    this.baseSalary = baseSalary
    this.salaryCurrency = salaryCurrency
    this.department = department
}

function CurrentEmployee(name, lastName, location, phoneNumber, position, startDate, baseSalary, salaryCurrency, department) {
    Employee.call(this, name, lastName, location, phoneNumber, position, startDate, baseSalary, salaryCurrency, department)
    this.writeReport = function() {
        console.log(`${this.name} ${this.lastName} has written a report`)
    }
    this.organizeMeeting = function () {
        console.log(`${this.name} ${this.lastName} has organized a meeting`)
    }
    this.startVacation = function () {
        console.log(`${this.name} ${this.lastName} has started his vacation today`)
    }
}
function RetiredEmployee(name, lastName, location, phoneNumber, position, startDate, baseSalary, salaryCurrency, department, endDate) {
    Employee.call(this, name, lastName, location, phoneNumber, position, startDate, baseSalary, salaryCurrency, department)
    this.endDate = endDate
    this.retire = function () {
        console.log(`${this.name} ${this.lastName} was retired at ${this.endDate}`)
    }
}

const person1 = new Person('John', 'Smith', 'Ukraine', '+1234567890')
const employee1 = new Employee('Max', 'Mad', 'Ukraine', '+1234567890', 'Senior engineer', '10.10.1990', '10000', '$', 'IT')
const currentEmployee1 = new CurrentEmployee('Hulk', 'Hogan', 'Ukraine', '+1234567890', 'Senior engineer', '10.10.1990', '10000', '$', 'IT')
const retiredEmployee1 = new RetiredEmployee('Al', 'Capone', 'Ukraine', '+1234567890', 'Senior engineer', '10.10.1990', '10000', '$', 'IT', '10.10.2000')

console.log(person1)
person1.eat()
person1.sleep()
person1.callFriend()

console.log(employee1)
employee1.eat()
employee1.sleep()
employee1.callFriend()

console.log(currentEmployee1)
currentEmployee1.eat()
currentEmployee1.sleep()
currentEmployee1.callFriend()
currentEmployee1.writeReport()
currentEmployee1.organizeMeeting()
currentEmployee1.startVacation()

console.log(retiredEmployee1)
retiredEmployee1.eat()
retiredEmployee1.sleep()
retiredEmployee1.callFriend()
retiredEmployee1.retire()

