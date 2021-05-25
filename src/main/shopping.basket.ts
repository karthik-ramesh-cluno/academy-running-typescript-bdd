import moment = require("moment-timezone");
import {Moment} from "moment-timezone";

export interface BasketContents {
    creationDate: string,
    units:
        {
            name: string,
            quantity: number,
            pricePerItem: number,
            total: number
        }[],
    totalPrice: number,
    currency: string
}

export class ShoppingBasket {
    private static shoppingBasket: ShoppingBasket;
    private createDate: Moment;

    private constructor() {
        const date = new Date();
        this.createDate =  moment.utc();

    }

    static view(): BasketContents {
        return {
            currency: "", totalPrice: 0, units: [],
            creationDate: this.shoppingBasket.createDate.toISOString().substr(0, 10)
        }
    }

    static addProduct(productId: number, productRepoository: {getProduct: (productId: number) => {name: string, price: number}}) {
        this.shoppingBasket = new ShoppingBasket();
    }
}