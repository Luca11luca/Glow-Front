

import { createContext, useContext, useState, useEffect } from "react";
import { cartService, favoritesService } from "../services/api";
import { products } from "../components/Products";
 
const AppContext = createContext();
 
function getProductData(productId) {
    return products.find(p => p.id === productId);
}
 
function enrichItems(items) {
    return items.map(item => {
        const local = getProductData(item.productId);
        return {
            ...item,
            image: local?.image || "",
            title: local?.title || item.title,
            price: local?.price || item.price,
        };
    });
}
 
export function AppProvider({ children }) {
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem("user");
        return stored ? JSON.parse(stored) : null;
    });
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
 
    useEffect(() => {
        if (user && localStorage.getItem("token")) {
            cartService.get().then(data => Array.isArray(data) && setCart(enrichItems(data)));
            favoritesService.get().then(data => Array.isArray(data) && setFavorites(enrichItems(data)));
        } else {
            setCart([]);
            setFavorites([]);
        }
    }, [user]);
 
    function login(userData, token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    }
 
    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    }
 
    async function addToCart(product) {
        if (!user) { alert("Iniciá sesión para agregar al carrito"); return; }
        const updated = await cartService.add({ productId: product.productId, title: product.title, price: product.price });
        if (Array.isArray(updated)) setCart(enrichItems(updated));
    }
 
    async function updateCartQuantity(productId, quantity) {
        const updated = await cartService.update(productId, quantity);
        if (Array.isArray(updated)) setCart(enrichItems(updated));
    }
 
    async function removeFromCart(productId) {
        const updated = await cartService.remove(productId);
        if (Array.isArray(updated)) setCart(enrichItems(updated));
    }
 
    async function clearCart() {
        const updated = await cartService.clear();
        if (Array.isArray(updated)) setCart(updated);
    }
 
    async function toggleFavorite(product) {
        if (!user) { alert("Iniciá sesión para guardar favoritos"); return; }
        const updated = await favoritesService.toggle({ productId: product.productId, title: product.title, price: product.price });
        if (Array.isArray(updated)) setFavorites(enrichItems(updated));
    }
 
    function isFavorite(productId) {
        return favorites.some(f => f.productId === productId);
    }
 
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
 
    return (
        <AppContext.Provider value={{
            user, login, logout,
            cart, addToCart, updateCartQuantity, removeFromCart, clearCart, cartCount,
            favorites, toggleFavorite, isFavorite,
            searchQuery, setSearchQuery
        }}>
            {children}
        </AppContext.Provider>
    );
}
 
export function useApp() {
    return useContext(AppContext);
}