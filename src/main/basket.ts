


interface BasketItem {
  product: string
  quantity: number
}

export interface Catalog {
  getPrice: (product: string) => number
}

export class Basket {
    private products: BasketItem[]

    constructor(catalog: Catalog) {
      this.products = []
    }

    addProduct(product: string, quantity: number) {
        this.products.push({product, quantity})
    }

    getCreationDate(): Date {
        return new Date();
    }

    getItems(): BasketItem[] {
        return [...this.products];
    }

    getTotal(): number {
        return 0;
    }
}



