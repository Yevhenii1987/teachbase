const employees = [
    {
        firstName: 'Alex',
        lastName: 'Smith',
        age: 54,
        salary: 10000,
        position: 'Architect'
    },
    {
        firstName: 'Gustav',
        lastName: 'Andersen',
        age: 31,
        salary: 5000,
        position: 'Software engineer'
    },
    {
        firstName: 'Liz',
        lastName: 'Taylor',
        age: 20,
        salary: 7000,
        position: 'Manager'
    }
]

let sumSalary = employees.reduce(function (acc, item) {
    return item.salary += acc
}, 0)

let midSalary = Math.round(sumSalary / employees.length)

let sortedEmployees = employees.sort(function (a, b) {
    return a.salary - b.salary
})

let filteredEmployees = employees.filter(function (item) {
    return item.salary > 4500 && item.age > 25
})

console.log(midSalary)
console.log(sortedEmployees)
console.log(filteredEmployees)