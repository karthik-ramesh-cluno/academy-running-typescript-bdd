import {Printer, Basket} from "../main/basket";
import {mock} from "jest-mock-extended";

describe('Basket', () => {
    it("should create a basket when a product is added", () => {
        let printer: Printer = mock<Printer>();
        let basket: Basket = new Basket(printer);
        basket.add('The Hobbit', 2);
        expect(basket.getCreationDate()).toEqual('08/04/2021');
    })
})