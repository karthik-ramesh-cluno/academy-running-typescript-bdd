import {ShoppingBasket} from "../main/shopping.basket";


class MockProductRepository {
    getProduct = jest.fn()
}

describe("shopping-basket", () => {
    beforeEach(async () => {
        Date.now = jest.fn(() => new Date(Date.UTC(2021, 4, 25)).valueOf())
    });

    it("it should create basket when adding first product", () => {
        ShoppingBasket.addProduct(10002, new MockProductRepository());
        expect(ShoppingBasket.view()).toEqual(expect.objectContaining({
            creationDate: "2021-05-25"
        }))
    })

    it("it should the Hobbit to the basket with the correct price", () => {
        const productRepository = new MockProductRepository();
        productRepository.getProduct.mockReturnValue({name: "The Hobbit", quantity: 1, pricePerItem: 5, total: 5})
        ShoppingBasket.addProduct(10002, productRepository);
        expect(ShoppingBasket.view()).toEqual(expect.objectContaining({
            units: [{name: "The Hobbit", quantity: 1, pricePerItem: 5, total: 5}]
        }))
    })
})