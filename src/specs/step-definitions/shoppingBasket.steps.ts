import { Basket } from "../../main/basket"
import {DataTable} from '@cucumber/cucumber'

import {defineFeature, loadFeature} from "jest-cucumber";
import { isBreakStatement } from 'typescript';

const feature = loadFeature('./src/specs/features/shoppingBasket.feature')

defineFeature(feature, test => {
    let basket: Basket;
    beforeEach(() => {
        basket = new Basket();
    })

    test("Add items to shopping basket", ({ given, and, when, then}) => {
        given(/^I add (\d+) units of "([^"]*)" to my shopping basket$/, (numberOfProducts: number, productTitle:string) => {
            basket.add(numberOfProducts, productTitle)
        })
        and(/^I add (\d+) units of "([^"]*)"$/, (numberOfProducts: number, productTitle:string) => {
            basket.add(numberOfProducts, productTitle)
        })
        when(/^I check the content of my shopping basket$/, (amount: number, date: string) => {
            basket.getContents()
        })
        then("it should contain the following information:", (basketContents: string) => {
            expect(getContents).toHaveBeenCalledWith(basketContents)
        })
    })
})

