import { useSearchParams, useParams } from "react-router-dom";
import Products from "../components/Products";
import { useNavigate } from "react-router-dom";

const Categorias = () => {
    const [searchParams] = useSearchParams();
    const { cat: catParam } = useParams();
    const navigate = useNavigate();

    const cat = catParam
        ? catParam.charAt(0).toUpperCase() + catParam.slice(1)
        : searchParams.get("cat");

    const categories = ["Destilados", "Licores", "Vermouth", "Vinos"];

    return (
        <div className="container py-4">
            <h2 className="text-light mb-4"><i className="bi bi-grid me-2" />Categorías</h2>
            <div className="d-flex gap-2 flex-wrap mb-4">
                <button onClick={() => navigate("/categorias")} className={`btn btn-sm ${!cat ? "btn-primary" : "btn-outline-primary"}`}>
                    Todos
                </button>
                {categories.map(c => (
                    <button key={c} onClick={() => navigate(`/categorias/${c.toLowerCase()}`)} className={`btn btn-sm ${cat === c ? "btn-primary" : "btn-outline-primary"}`}>
                        {c}
                    </button>
                ))}
            </div>
            <Products filterCategory={cat} />
        </div>
    );
};

export default Categorias;