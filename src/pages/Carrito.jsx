import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
    const { cart, updateCartQuantity, removeFromCart, clearCart, user } = useApp();
    const navigate = useNavigate();

    if (!user) {
        return (
            <div className="text-center py-5">
                <i className="bi bi-basket3 fs-1 text-secondary" />
                <h4 className="mt-3">Iniciá sesión para ver tu carrito</h4>
                <button className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#loginModal">
                    Iniciar sesión
                </button>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="text-center py-5">
                <i className="bi bi-basket3 fs-1 text-secondary" />
                <h4 className="mt-3">Tu carrito está vacío</h4>
                <button className="btn btn-outline-primary mt-3" onClick={() => navigate("/")}>
                    Ver productos
                </button>
            </div>
        );
    }

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const formatted = (n) => new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(n);

    return (
        <div className="container py-4">
            <h2 className="text-light mb-4"><i className="bi bi-basket3 me-2" />Mi Carrito</h2>
            <div className="row">
                <div className="col-lg-8">
                    {cart.map(item => (
                        <div key={item.productId} className="card bg-dark text-light border-secondary mb-3">
                            <div className="card-body d-flex align-items-center gap-3">
                                <img src={item.image} alt={item.title} style={{ width: 70, height: 70, objectFit: "contain" }} />
                                <div className="flex-grow-1">
                                    <h6 className="mb-1">{item.title}</h6>
                                    <small className="text-secondary">{formatted(item.price)} c/u</small>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <button className="btn btn-outline-secondary btn-sm" onClick={() => updateCartQuantity(item.productId, item.quantity - 1)}>
                                        <i className="bi bi-dash" />
                                    </button>
                                    <span className="fw-bold px-2">{item.quantity}</span>
                                    <button className="btn btn-outline-secondary btn-sm" onClick={() => updateCartQuantity(item.productId, item.quantity + 1)}>
                                        <i className="bi bi-plus" />
                                    </button>
                                </div>
                                <span className="fw-bold text-primary">{formatted(item.price * item.quantity)}</span>
                                <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(item.productId)}>
                                    <i className="bi bi-trash" />
                                </button>
                            </div>
                        </div>
                    ))}
                    <button className="btn btn-outline-danger btn-sm mt-2" onClick={clearCart}>
                        <i className="bi bi-trash me-1" />Vaciar carrito
                    </button>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                    <div className="card bg-dark text-light border-secondary">
                        <div className="card-body">
                            <h5 className="mb-3">Resumen</h5>
                            {cart.map(item => (
                                <div key={item.productId} className="d-flex justify-content-between small mb-1">
                                    <span>{item.title} x{item.quantity}</span>
                                    <span>{formatted(item.price * item.quantity)}</span>
                                </div>
                            ))}
                            <hr className="border-secondary" />
                            <div className="d-flex justify-content-between fw-bold fs-5">
                                <span>Total</span>
                                <span className="text-primary">{formatted(total)}</span>
                            </div>
                            <button className="btn btn-primary w-100 mt-3 rounded-pill">
                                <i className="bi bi-credit-card me-2" />Finalizar compra
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carrito;