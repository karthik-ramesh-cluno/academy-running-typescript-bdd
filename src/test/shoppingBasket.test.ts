import {Basket} from "../main/basket";
import {ProductRepo} from "../main/ProductRepo";
import { mock } from 'jest-mock-extended';

describe('shopping basket', () => {
    describe('adding items', () => {
        it('should add 1 product when 1 product is added', () => {
            let productRepo = mock<ProductRepo>();
            const basket = new Basket(productRepo);
            basket.add(1, "The Hobbit");
            expect(productRepo.addTheHobbit).toHaveBeenCalledWith(1);
        })
    })
})