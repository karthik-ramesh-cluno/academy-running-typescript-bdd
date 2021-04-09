export interface ProductRepo {
    addTheHobbit(n: number): void
}

export class ProductRepo implements ProductRepo {
    private products: array;
    constructor() {
        this.products = [];
    }
    addTheHobbit(n: number): void {
        this.products.push({"The Hobbit": "n"})
    }
}