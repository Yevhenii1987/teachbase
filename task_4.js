function Ticket() {
    this.cashBox = 0
    this.events = []
    this.soldTickets = []

    this.createEvent = (event, cost) => {
        this.events.push({
            event,
            cost
        })
    }
    this.buyTicket = (event) => {
        let payment = 0
        this.events.forEach((item) => {
            if ( item.event === event ) {
                payment = item.cost
            }
        })
        this.soldTickets.push({
            id: makeID(),
            event,
            payment
        })
        this.cashBox += payment
    }
    this.returnTicket = (id) => {
        this.soldTickets.forEach((item, index) => {
            if ( item.id === id ) {
                this.soldTickets.splice(index, 1)
                this.cashBox -= item.payment
            }
        })
    }
}
const ticketWindow = new Ticket()

// ID generator

function makeID() {
    let id = '';
    let chars ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for( let i = 0; i < 6; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id
}

ticketWindow.createEvent('Concert', 500)
ticketWindow.buyTicket('Concert')
ticketWindow.buyTicket('Concert')
ticketWindow.buyTicket('Concert')
ticketWindow.buyTicket('Concert')


console.log(ticketWindow.events)
console.log(ticketWindow.soldTickets)
console.log(ticketWindow.cashBox)

ticketWindow.returnTicket('123456')