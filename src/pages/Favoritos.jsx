import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Favoritos = () => {
    const { favorites, user } = useApp();
    const navigate = useNavigate();

    if (!user) {
        return (
            <div className="text-center py-5">
                <i className="bi bi-heart fs-1 text-secondary" />
                <h4 className="mt-3">Iniciá sesión para ver tus favoritos</h4>
                <button className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#loginModal">
                    Iniciar sesión
                </button>
            </div>
        );
    }

    if (favorites.length === 0) {
        return (
            <div className="text-center py-5">
                <i className="bi bi-heart fs-1 text-secondary" />
                <h4 className="mt-3">No tenés favoritos todavía</h4>
                <p className="text-secondary">Presioná el corazón en cualquier producto para guardarlo.</p>
                <button className="btn btn-outline-primary mt-3" onClick={() => navigate("/")}>
                    Ver productos
                </button>
            </div>
        );
    }

    return (
        <div className="container py-4">
            <h2 className="text-light mb-4"><i className="bi bi-heart-fill text-danger me-2" />Mis Favoritos</h2>
            <div className="row">
                {favorites.map(product => (
                    <div key={product.productId} className="col-lg-5th mb-4 col-md-4 col-6">
                        <Card
                            productId={product.productId}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            description=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favoritos;
