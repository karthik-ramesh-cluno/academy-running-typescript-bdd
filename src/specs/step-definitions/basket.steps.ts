import { DataTable } from "@cucumber/cucumber";
import { Account } from "../../main/account";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Basket } from "../../main/basket";

const feature = loadFeature("./src/specs/features/basket.feature");

defineFeature(feature, (test) => {
  const mockPrintline = jest.fn();
  const printer = {
    printline: mockPrintline,
  };
  let basket: Basket;
  beforeEach(() => {
    basket = new Basket(printer);
  });

  test("Add items to shopping basket", ({ given, and, when, then }) => {
    given(
      /^I add (\d+) units of (.*) to my shopping basket$/,
      (amount: number, product: string) => {
        basket.add(product, amount);
      }
    );
    and(/^I add (\d+) units of (.*)$/, (amount: number, product: string) => {
      basket.add(product, amount);
    });
    when("I check the content of my shopping basket", () => {
      basket.checkContent();
    });

    then("it should contain the following information:", (table) => {
      table.forEach((row: any) => {
        expect(printer.printline).toBeCalledWith(row.info);
      });
    });
  });
});
