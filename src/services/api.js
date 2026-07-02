const BASE_URL = "https://glow-back.onrender.com/api";

function getHeaders() {
    const token = localStorage.getItem("token");
    return {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {})
    };
}

export const authService = {
    register: async (data) => {
        const res = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        return res.json();
    },
    login: async (data) => {
        const res = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        return res.json();
    }
};

export const cartService = {
    get: async () => {
        const res = await fetch(`${BASE_URL}/cart`, { headers: getHeaders() });
        return res.json();
    },
    add: async (product) => {
        const res = await fetch(`${BASE_URL}/cart`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(product)
        });
        return res.json();
    },
    update: async (productId, quantity) => {
        const res = await fetch(`${BASE_URL}/cart`, {
            method: "PUT",
            headers: getHeaders(),
            body: JSON.stringify({ productId, quantity })
        });
        return res.json();
    },
    remove: async (productId) => {
        const res = await fetch(`${BASE_URL}/cart/${productId}`, {
            method: "DELETE",
            headers: getHeaders()
        });
        return res.json();
    },
    clear: async () => {
        const res = await fetch(`${BASE_URL}/cart`, {
            method: "DELETE",
            headers: getHeaders()
        });
        return res.json();
    }
};

export const favoritesService = {
    get: async () => {
        const res = await fetch(`${BASE_URL}/favorites`, { headers: getHeaders() });
        return res.json();
    },
    toggle: async (product) => {
        const res = await fetch(`${BASE_URL}/favorites/toggle`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(product)
        });
        return res.json();
    }
};
