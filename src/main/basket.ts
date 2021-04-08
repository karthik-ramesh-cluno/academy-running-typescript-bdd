export interface Printer {
  printline(line: string): void;
}

interface Item {
  product: string;
  quantity: number;
  price: number
}

const Warehouse = [
  {id: 10001, type: 'Books', product: 'Lord of the Rings', unitPrice: 10, unitCurrency: 'GBP'},
  {id: 10002, type: 'Books', product: 'The Hobbit', unitPrice: 5, unitCurrency: 'GBP'},
  {id: 20001, type: 'DVDs', product: 'Game of Thrones', unitPrice: 9, unitCurrency: 'GBP'},
  {id: 20002, type: 'DVDs', product: 'Breaking Bad', unitPrice: 7, unitCurrency: 'GBP'}
]


export class Basket {
  private printer: Printer;
  private creationDate?: Date;
  private items: Item[] = [];

  constructor(printer: Printer) {
    this.printer = printer;
  }

  add(product: string, quantity: number) {
    if (!this.creationDate) this.creationDate = new Date();
    const item = Warehouse.find((item) => item.product === product);
    if (item){
      this.items.push({
        product: item.product,
        quantity,
        price: item.unitPrice * quantity
      });
    }
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
