export interface Printer {
  printline(line: string): void;
}

interface Item {
  product: string;
  quantity: number;
}

export class Basket {
  private printer: Printer;
  private creationDate?: Date;
  private items: Item[] = [];

  constructor(printer: Printer) {
    this.printer = printer;
  }

  add(product: string, quantity: number) {
    if (!this.creationDate) this.creationDate = new Date();
    this.items.push({
      product,
      quantity,
    });
  }

  checkContent() {
    throw new Error("Method not implemented.");
  }

  getCreationDate() {
    return this.creationDate?.toDateString();
  }

  getBasketItems(): Item[] {
    return this.items;
  }
}
