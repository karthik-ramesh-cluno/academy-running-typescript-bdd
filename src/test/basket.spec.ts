import { Basket, Catalog } from "../main/basket";

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
    expect(basket.getTotal()).toBe(4.5)
  })
})
