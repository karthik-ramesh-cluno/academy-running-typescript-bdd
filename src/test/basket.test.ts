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
      expect(basket.getCreationDate()).toBe("");
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
          product: {
            id: 10002,
            type: "Books",
            name: "The Hobbit",
            unitPrice: { amount: 5, currency: "GBP" },
          },
          quantity: 2,
          price: {
            amount: 10,
            currency: "GBP",
          },
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

  describe("check content", () => {
    it("should print the basket details", () => {
      let printer: Printer = mock<Printer>();
      let basket: Basket = new Basket(printer);
      MockDate.set(1617875183667); // 2021-04-08T09:46:23.667Z
      basket.add("The Hobbit", 2);
      basket.checkContent();
      expect(printer.printline).toBeCalledWith("Thu Apr 08 2021");
      expect(printer.printline).toBeCalledWith(
        "2 x The Hobbit // 2 x 5.00 = £10.00"
      );
      expect(printer.printline).toBeCalledWith("Total: £10.00");
    });
  });
});
