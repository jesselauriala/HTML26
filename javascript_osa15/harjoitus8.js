class ShoppingCart {
    constructor() {
        this.items = [];
    }

    add(product) {
        this.items.push(product);
    }

    remove(id) {
        this.items = this.items.filter(product => product.id !== id);
    }

    get total() {
        return this.items.reduce((sum, product) => sum + product.price, 0);
    }

    clear() {
        this.items = [];
    }
}


