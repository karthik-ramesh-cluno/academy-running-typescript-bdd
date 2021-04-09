import {DataTable} from '@cucumber/cucumber'
import {defineFeature, loadFeature} from "jest-cucumber";

const feature = loadFeature('./src/specs/features/shopping-basket.feature')

defineFeature(feature, test => {

//     const mockPrintline = jest.fn()
//     const printer = {
//         printline: mockPrintline
//     }
//     let account: Account
//     beforeEach(() => {
//         account = new Account(printer)
//     })
// 
    test("Add items to basket", ({ given, and, when, then}) => {
      given(/I add (\d+) units of "(.*)" to my shopping basket/, (quantity: number, product: string) => {
        basket.addProduct(product, quantity)
      })
      and(/I add (\d+) units of "(.*)"/, (quantity: number, product: string) => {
        basket.addProduct(product, quantity)
      })
      when('I check the content of my shopping basket', () => {})
      then('it should contain the following information', () => {})
    })
})


