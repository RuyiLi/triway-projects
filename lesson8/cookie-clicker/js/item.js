const prev = localStorage[ 'items' ] ? JSON.parse(localStorage[ 'items' ]) : {};

class Item {
    constructor ({
        initialPrice,
        priceIncrement,
        cps,
        name
    }) {
        this.cost = prev[ name ] ? (prev[ name ].cost || initialPrice) : initialPrice;
        this.priceIncrement = prev[ name ] ? (prev[ name ].priceIncrement || priceIncrement) : priceIncrement;
        this.cps = prev[ name ] ? (prev[ name ].cps || cps) : cps;

        this.quantity = prev[ name ] ? (prev[ name ].quantity || 0) : 0;
        this.currentCps = prev[ name ] ? (prev[ name ].currentCps || 0) : 0;
    }

    purchase () {
        this.cost += this.priceIncrement;
        this.quantity++;
        this.currentCps = this.quantity * this.cps;
    }
}

const ITEMS = {
    'cursor': new Item({
        initialPrice: 5,
        priceIncrement: 2,
        cps: 1,
        name: 'cursor'
    }),
    'grandma': new Item({
        initialPrice: 15,
        priceIncrement: 4,
        cps: 5,
        name: 'grandma'
    }),
    'factory': new Item({
        initialPrice: 100,
        priceIncrement: 25,
        cps: 10,
        name: 'factory'
    })
}