import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature('./src/specs/features/shopping-basket.feature')

class Basket {

    addProduct(product: string, quantity: number) {
        throw new Error('notp implemented')
    }

    getCreationDate() {
        return undefined;
    }

    getItems() {
        return undefined;
    }

    getTotal() {
        return undefined;
    }
}

defineFeature(feature, test => {
    let basket: Basket;
    beforeEach(() => {
        basket = new Basket()
    })

    test("Add items to basket", ({given, and, when, then}) => {
        given(/I add (\d+) units of "(.*)" to my shopping basket/, (quantity: number, product: string) => {
            basket.addProduct(product, quantity)
        })
        and(/I add (\d+) units of "(.*)"/, (quantity: number, product: string) => {
            basket.addProduct(product, quantity)
        })
        when('I check the content of my shopping basket', () => {

        })
        then(/^it should have been created on the "(.*)"$/, (date) => {
            expect(basket.getCreationDate()).toBe(date)
        })
        then(/^it should contain the following items$/, (printedOutput) => {
            expect(basket.getItems()).toBe(printedOutput)
        })
        then(/^the cart total is "([^"]*)"$/, (total) => {
            expect(basket.getTotal()).toBe(total)
        })
    })
})



