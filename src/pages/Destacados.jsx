import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import aperol from "../images/aperol.png";
import fernet from "../images/fernet.png";
import black from "../images/Black.png";
import carpano from "../images/Carpano.png";
import beefeater from "../images/Beefeater.png";
import cosecha from "../images/Cosecha.png";
 
const destacados = [
    {
        id: 3, title: "Fernet 750ml", category: "Licores", price: 10000, image: fernet,
        badge: "🔥 A 10 por el 10",
        description: "El clásico infaltable. Aperitivo elaborado con hierbas aromáticas y especias digestivas. El favorito de los argentinos.",
        color: "#00f0ff"
    },
    {
        id: 7, title: "Black Label 750ml", category: "Destilados", price: 34000, image: black,
        badge: "⭐ Premium",
        description: "Whisky escocés de blend suave y ahumado. Para los que aprecian lo mejor en cada copa.",
        color: "#ffd700"
    },
    {
        id: 8, title: "Beefeater 750ml", category: "Destilados", price: 12000, image: beefeater,
        badge: "🍸 Coctelería",
        description: "El gin londinense clásico. Seco, con notas de enebro y cítricos. Ideal para el Gin Tonic perfecto.",
        color: "#ff6b6b"
    },
    {
        id: 11, title: "Carpano Rosso 750ml", category: "Vermouth", price: 3500, image: carpano,
        badge: "🏆 Top Vermouth",
        description: "Vermú rojo italiano, dulce y especiado. El alma del Negroni y el Americano.",
        color: "#ff4d4d"
    },
    {
        id: 1, title: "Aperol 750ml", category: "Licores", price: 6000, image: aperol,
        badge: "☀️ Verano",
        description: "Licor botánico italiano con sabor cítrico, herbal y agridulce. La base del Aperol Spritz.",
        color: "#ff8c00"
    },
    {
        id: 15, title: "Cosecha Tardía 750ml", category: "Vinos", price: 5000, image: cosecha,
        badge: "🍷 Selección",
        description: "Vino dulce de cosecha tardía, elegante y con notas frutales. Para los momentos especiales.",
        color: "#9b59b6"
    },
];
 
export default function Destacados() {
    const { addToCart, toggleFavorite, isFavorite } = useApp();
    const navigate = useNavigate();
 
    const formatted = (n) => new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(n);
 
    return (
        <div className="container py-4">
            <div className="text-center mb-5">
                <h2 className="text-light fw-bold fs-1">
                    <i className="bi bi-stars me-2 text-warning" />
                    Destacados
                </h2>
                <p className="text-secondary">Una selección especial de nuestros mejores productos</p>
            </div>
 
            <div className="row g-4">
                {destacados.map((product, index) => (
                    <div key={product.id} className={`col-12 col-md-6 ${index === 0 || index === 1 ? "col-lg-6" : "col-lg-4"}`}>
                        <div
                            className="card bg-dark text-light h-100 border-0 overflow-hidden position-relative"
                            style={{
                                boxShadow: `0 0 20px ${product.color}33, 0 0 40px ${product.color}11`,
                                border: `1px solid ${product.color}44`,
                                transition: "transform 0.3s, box-shadow 0.3s",
                                borderRadius: "16px"
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = "translateY(-6px)";
                                e.currentTarget.style.boxShadow = `0 0 30px ${product.color}66, 0 0 60px ${product.color}22`;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = `0 0 20px ${product.color}33, 0 0 40px ${product.color}11`;
                            }}
                        >
                            {/* Badge */}
                            <div
                                className="position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill fw-bold small"
                                style={{ background: `${product.color}22`, border: `1px solid ${product.color}`, color: product.color, zIndex: 1 }}
                            >
                                {product.badge}
                            </div>
 
                            {/* Favorito */}
                            <button
                                className={`position-absolute top-0 end-0 m-3 btn btn-sm border-0 ${isFavorite(product.id) ? "text-danger" : "text-secondary"}`}
                                style={{ zIndex: 1 }}
                                onClick={() => toggleFavorite({ productId: product.id, title: product.title, price: product.price })}
                            >
                                <i className={`bi ${isFavorite(product.id) ? "bi-heart-fill" : "bi-heart"} fs-4`} />
                            </button>
 
                            <div className="row g-0 h-100">
                                {/* Imagen */}
                                <div className="col-5 d-flex align-items-center justify-content-center p-3"
                                    style={{ background: `linear-gradient(135deg, ${product.color}11, transparent)` }}>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        style={{ maxHeight: index < 2 ? "220px" : "160px", objectFit: "contain", filter: `drop-shadow(0 0 12px ${product.color}88)` }}
                                    />
                                </div>
 
                                {/* Info */}
                                <div className="col-7 d-flex flex-column justify-content-between p-3 pt-5">
                                    <div>
                                        <span className="text-secondary small">{product.category}</span>
                                        <h4 className="fw-bold mt-1" style={{ color: product.color }}>{product.title}</h4>
                                        <p className="text-secondary small mt-2">{product.description}</p>
                                    </div>
                                    <div>
                                        <p className="fw-bold fs-5 mb-3" style={{ color: product.color }}>{formatted(product.price)}</p>
                                        <button
                                            className="btn w-100 rounded-pill fw-bold"
                                            style={{ background: `${product.color}22`, border: `1px solid ${product.color}`, color: product.color }}
                                            onClick={() => addToCart({ productId: product.id, title: product.title, price: product.price })}
                                        >
                                            <i className="bi bi-cart-plus me-2" />Agregar al carrito
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
 
            <div className="text-center mt-5">
                <button className="btn btn-outline-primary rounded-pill px-5" onClick={() => navigate("/")}>
                    <i className="bi bi-grid me-2" />Ver todos los productos
                </button>
            </div>
        </div>
    );
}