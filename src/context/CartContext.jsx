import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useLocalStorage('cart', []);

    const addToCart = (p) => {
        setCart(curr => {
            const exists = curr.find(i => i.id === p.id);
            return exists
                ? curr.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i)
                : [...curr, { ...p, qty: 1 }];
        });
    };

    const updateQty = (id, d) => setCart(curr => curr.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + d) } : i));
    const remove = (id) => setCart(curr => curr.filter(i => i.id !== id));

    // Nova função para limpar o carrinho
    const clearCart = () => setCart([]);

    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    const totalValue = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQty, remove, clearCart, totalItems, totalValue }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);