const user1 = {
    age: 18,
    paid: true,
    blocked: false,
    badUsername: false,
    isAdmin: false
}

function allowAccess(user) {
    let access = false

    if( user.isAdmin && user.age >= 18 && user.age <= 35 ) {
        access = true
    } else if ( user.age >= 18 && user.age <= 35 && user.paid && !user.blocked && !user.badUsername ) {
        access = true
    }

    return access
}

function allowAccess2(user) {
    return user.isAdmin && user.age >= 18 && user.age <= 35 ? true :
        user.age >= 18 && user.age <= 35 && user.paid && !user.blocked && !user.badUsername
}

console.log(allowAccess(user1))
console.log(allowAccess2(user1))