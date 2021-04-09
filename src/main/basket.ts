import {ProductRepo} from "./ProductRepo";

export class Basket {
    private productRepo: ProductRepo;
    constructor(productRepo: ProductRepo) {
        this.productRepo = productRepo;
    }

    add(numberOfProducts: number, productTitle: string): void {
        this.productRepo.addTheHobbit(numberOfProducts)
    }

    getContents(): string {
        throw new Error('Not implemented');
    }
}