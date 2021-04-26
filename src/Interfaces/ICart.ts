import Product from "./IProduct";

export default interface ICart {
    items: Array<Product>;
    quantity: number;
    totalValue: number;
}