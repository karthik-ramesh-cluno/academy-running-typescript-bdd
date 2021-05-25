import {defineFeature, loadFeature} from "jest-cucumber";
import {BasketContents, ShoppingBasket} from "../../main/shopping.basket";

const feature = loadFeature('./src/specs/features/shopping-basket.feature')

defineFeature(feature, test => {
    let shoppingBasketContents: BasketContents;

    test('User adds items to the shopping basket', ({ given, and, when, then }) => {
        given(/^User adds (\d+) units of the Hobbit to their shopping basket$/, (quantity) => {
            for(let i = 0; i < quantity; i++) {
                ShoppingBasket.addProduct(10002)
            }
        });

        and(/^User adds (\d+) units of Breaking Bad to their shopping basket$/, (quantity) => {
            for(let i = 0; i < quantity; i++) {
                ShoppingBasket.addProduct(20110)
            }
        });

        when('User checks the content of their shopping basket', () => {
            shoppingBasketContents = ShoppingBasket.view()
        });

        then('They should see the following information', (docString) => {
            expect(shoppingBasketContents).toEqual(JSON.parse(docString));
        });
    });
})

