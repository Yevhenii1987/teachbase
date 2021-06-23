function evenTo20For() {
    for(let i = 0; i <= 20; i++) {
        if(i % 2 === 0) {
            console.log(i)
        }
    }
}
function evenTo20While() {
    let i = 0

    while(i <= 20) {
        if(i % 2 === 0) {
            console.log(i)
        }
        i++
    }
}
function evenTo20DoWhile() {
    let i = 0

    do {
        if(i % 2 === 0) {
            console.log(i)
        }
        i++
    } while(i <= 20)
}
evenTo20For()
evenTo20While()
evenTo20DoWhile()