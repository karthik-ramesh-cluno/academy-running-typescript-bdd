import { Basket } from "../../main/basket"

import {defineFeature, loadFeature} from "jest-cucumber";

const feature = loadFeature('./src/specs/features/basket.feature')

defineFeature(feature, test => {
    let basket: Basket;
    beforeEach(() => {
        basket = new Basket();
    })

    test("Add items to shopping basket", ({ given, and, when, then}) => {
        let contents: string
        given(/^I add (\d+) units of "([^"]*)" to my shopping basket$/, (numberOfProducts: number, productTitle:string) => {
            basket.add(numberOfProducts, productTitle)
        })
        and(/^I add (\d+) units of "([^"]*)"$/, (numberOfProducts: number, productTitle:string) => {
            basket.add(numberOfProducts, productTitle)
        })
        when(/^I check the content of my shopping basket$/, (amount: number, date: string) => {
            contents = basket.getContents()
        })
        then("it should contain the following information:", (basketContents: string) => {
            expect(contents).toEqual(basketContents)
        })
    })
})

