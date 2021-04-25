export default interface Product {
    productId: number;
    price: number;
    listPrice: number;
    productName: string;
    stars: number;
    imageUrl: string;
    installments: Array<Installments>;
}

interface Installments {
    value: number;
    quantity: number;
}