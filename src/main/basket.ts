import { WarehouseProduct, Warehouse, Money } from "./warehouse";

export interface Printer {
  printline(line: string): void;
}

interface Item {
  product: WarehouseProduct;
  quantity: number;
  price: Money;
}

export class Basket {
  private printer: Printer;
  private creationDate?: Date;
  private items: Item[] = [];

  constructor(printer: Printer) {
    this.printer = printer;
  }

  add(productName: string, quantity: number) {
    if (!this.creationDate) this.creationDate = new Date();
    const item = Warehouse.find((item) => item.name === productName);
    if (item) {
      this.items.push({
        product: item,
        quantity,
        price: {
          amount: item.unitPrice.amount * quantity,
          currency: item.unitPrice.currency,
        },
      });
    }
  }

  checkContent() {
    this.printer.printline(this.getCreationDate());
    let amount = 0;
    this.items.map((item) => {
      const printItem = `${item.quantity} x ${item.product.name} // ${item.quantity} x ${item.product.unitPrice.amount}.00 = £${item.price.amount}.00`;
      this.printer.printline(printItem);
      amount += item.price.amount;
    });

    this.printer.printline(`Total: £${amount}.00`);
  }

  getCreationDate(): string {
    return this.creationDate?.toDateString() || "";
  }

  getBasketItems(): Item[] {
    return this.items;
  }
}
