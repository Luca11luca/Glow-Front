import defaultImage from "../images/street.png";
import { useApp } from "../context/AppContext";

export default function GlowCard({ image, title, description, price, productId }) {
    const { addToCart, toggleFavorite, isFavorite } = useApp();
    const favorite = isFavorite(productId);

    const formattedPrice = price != null
        ? new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(price)
        : "";

    const handleAddToCart = () => addToCart({ productId, title, price, image });
    const handleToggleFavorite = () => toggleFavorite({ productId, title, price, image });

    return (
        <div className="glow-card m-2 p-2 w-100">
            <div className="d-flex justify-content-between align-items-center px-1">
                <h5 className="card-title p-2 mb-0">{title}</h5>
                <button
                    className={`btn btn-sm border-0 ${favorite ? "text-danger" : "text-secondary"}`}
                    onClick={handleToggleFavorite}
                    title={favorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                >
                    <i className={`bi ${favorite ? "bi-heart-fill" : "bi-heart"} fs-5`} />
                </button>
            </div>
            <img src={image || defaultImage} className="card-img-top rounded-top card-img-fluid" alt={title} />
            <div className="card-body">
                <p className="card-text">{description}</p>
                <p className="price">Precio: {formattedPrice}</p>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary btn-sm" onClick={handleAddToCart}>
                        <i className="bi bi-cart-plus me-1" />Agregar
                    </button>
                </div>
            </div>
        </div>
    );
}
