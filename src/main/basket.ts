export interface Printer {
  printline(line: string): void;
}

export class Basket {
  private printer: Printer;
  constructor(printer: Printer) {
    this.printer = printer;
  }

  add(product: string, amount: number) {
    throw new Error("Method not implemented.");
  }
  checkContent() {
    throw new Error("Method not implemented.");
  }
}
