enum WarehouseProductType {
  Book = "Books",
  DVD = "DVDs",
}
export interface Money {
  amount: number;
  currency: "GBP";
}
export interface WarehouseProduct {
  id: number;
  type: WarehouseProductType;
  name: string;
  unitPrice: Money;
}
export const Warehouse: WarehouseProduct[] = [
  {
    id: 10001,
    type: WarehouseProductType.Book,
    name: "Lord of the Rings",
    unitPrice: {
      amount: 10,
      currency: "GBP",
    },
  },
  {
    id: 10002,
    type: WarehouseProductType.Book,
    name: "The Hobbit",
    unitPrice: {
      amount: 5,
      currency: "GBP",
    },
  },
  {
    id: 20001,
    type: WarehouseProductType.DVD,
    name: "Game of Thrones",
    unitPrice: {
      amount: 9,
      currency: "GBP",
    },
  },
  {
    id: 20002,
    type: WarehouseProductType.DVD,
    name: "Breaking Bad",
    unitPrice: {
      amount: 7,
      currency: "GBP",
    },
  },
];
