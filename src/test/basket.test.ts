import { Printer, Basket } from "../main/basket";
import { mock } from "jest-mock-extended";
import MockDate from "mockdate";

describe("Basket", () => {
  afterEach(() => {
    MockDate.reset();
  });

  describe("Creation date", () => {
    it("should not create a basket when no product is added", () => {
      let printer: Printer = mock<Printer>();
      let basket: Basket = new Basket(printer);
      expect(basket.getCreationDate()).toBeUndefined();
    });
    it("should create a basket when a product is added", () => {
      let printer: Printer = mock<Printer>();
      let basket: Basket = new Basket(printer);
      MockDate.set(1617875183667);
      basket.add("The Hobbit", 2);
      expect(basket.getCreationDate()).toEqual("Thu Apr 08 2021");
    });

    it("should not create a basket again when another product is added", () => {
      let printer: Printer = mock<Printer>();
      let basket: Basket = new Basket(printer);
      MockDate.set(1617875183667); // 2021-04-08T09:46:23.667Z
      basket.add("The Hobbit", 2);

      MockDate.set(1617980183667); //2021-04-09T14:56:23.667Z
      basket.add("The Hobbit", 2);

      expect(basket.getCreationDate()).toEqual("Thu Apr 08 2021");
    });
  });

  describe("update basket content", () => {
    it("should update the basket when we add a valid product", () => {
      let printer: Printer = mock<Printer>();
      let basket: Basket = new Basket(printer);
      basket.add("The Hobbit", 2);

      expect(basket.getBasketItems()).toEqual([
        {
          product: "The Hobbit",
          quantity: 2,
        },
      ]);
    });

    it("should not update the basket when we add an invalid product", () => {
      let printer: Printer = mock<Printer>();
      let basket: Basket = new Basket(printer);
      basket.add("Something random", 2);

      expect(basket.getBasketItems()).toEqual([]);
    });
  });
});
