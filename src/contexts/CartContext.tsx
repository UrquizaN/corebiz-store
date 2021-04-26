import { useCallback, useContext, useState } from 'react';
import { createContext } from 'react';
import ICart from '../Interfaces/ICart';
import IProduct from '../Interfaces/IProduct';

interface CartContextData {
    cart: ICart;
    addCart: (product: IProduct) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ( { children } ) => {
    const [cart, setCart] = useState<ICart>(() => {
        const cart = localStorage.getItem('cart');

        if(cart) {
            return JSON.parse(cart)
        }

        return { items: [], quantity: 0, totalValue: 0 }
    })

    const addCart = useCallback( (product: IProduct) => {
        const newCart: ICart = {
            items: [...cart.items, product],
            quantity: cart.quantity + 1,
            totalValue: cart.totalValue + product.price
        }

        setCart(newCart);

        localStorage.setItem('cart', JSON.stringify(newCart))

    }, [cart]);

    return(
        <CartContext.Provider value={{addCart, cart}}>
            { children }
        </CartContext.Provider>
    )
}

function useCart(): CartContextData {
    const context = useContext(CartContext);
    
    if(!context) {
        throw new Error('Cart is not provided');
    } else {
        return context;
    }
}

export {
    CartProvider,
    useCart
} 