import {DataTable} from '@cucumber/cucumber'

import {defineFeature, loadFeature} from "jest-cucumber";

const feature = loadFeature('./src/specs/features/shoppingBasket.feature')

defineFeature(feature, test => {
    beforeEach(() => {

    })

    test("Add items to shopping basket", ({ given, and, when, then}) => {
        given(/^I add (\d+) units of "([^"]*)" to my shopping basket$/, (numberOfProducts: number, productTitle:string) => {

        })
        and(/^I add (\d+) units of "([^"]*)"$/, (numberOfProducts: number, productTitle:string) => {

        })
        when(/^I check the content of my shopping basket$/, (amount: number, date: string) => {

        })
        then("it should contain the following information:", (dataTable: DataTable) => {

        })
    })
})
