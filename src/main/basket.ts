


interface BasketItem {
  product: string
  quantity: number
}

export interface Catalog {
  getPrice: (product: string) => number
}

export class Basket {
    private products: Record<string, BasketItem>
    private catalog: Catalog;

    constructor(catalog: Catalog) {
        this.catalog = catalog;
        this.products = {}
    }

    addProduct(product: string, quantity: number) {
        if (this.products[product]) {
            this.products[product].quantity += quantity
        } else {
            this.products[product] = {
                quantity,
                product
            }
        }
    }

    getCreationDate(): Date {
        return new Date();
    }

    getItems(): BasketItem[] {
        return Object.values(this.products);
    }

    getTotal(): number {
        return this.getItems().reduce((acc, basketItem: BasketItem) => {
            return acc + (this.catalog.getPrice(basketItem.product) * basketItem.quantity);
        }, 0)
    }
}



