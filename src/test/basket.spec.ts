import { Basket, Catalog } from "../main/basket";
import { mock } from 'jest-mock-extended';

describe("the basket", () => {
  const dummyCatalog: Catalog = {
      getPrice: (product: string) => 0
  }
  it("has products in it when you add products", () => {
    const basket = new Basket(dummyCatalog)
    basket.addProduct("any string", 1)
    expect(basket.getItems()).toStrictEqual([
      {quantity: 1, product: "any string"}
    ])
  })

  it("can compute the total basket cost", () => {
    const catalog: Catalog = {
      getPrice: (product: string) => 4.5
    }
    const basket = new Basket(catalog)
    basket.addProduct("any string", 1)
    basket.addProduct("any string", 1)
    expect(basket.getTotal()).toBe(9)
  })

  it("group products by name", () => {
    const catalog: Catalog = {
      getPrice: (product: string) => 0
    }
    const basket = new Basket(catalog)
    basket.addProduct("any string", 1)
    basket.addProduct("any string", 1)
    expect(basket.getItems()).toStrictEqual([
      {quantity: 2, product: "any string"}
    ])
  })

  it("stores the creation date", () => {
    type Clock = () => Date;
    const date = new Date(2020 , 1, 10, 3, 4, 210)
    const clock = () => {
      return date;
    };

    const catalog: Catalog = {
      getPrice: (product: string) => 0
    }

    const basket = new Basket(catalog)
    basket.addProduct("any string", 1)
    basket.addProduct("any string", 1)
    expect(basket.getCreationDate()).toStrictEqual(date);
  })
})
