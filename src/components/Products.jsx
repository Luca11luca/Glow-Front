import Card from "./Card";
import { useApp } from "../context/AppContext";
import aperol from "../images/aperol.png";
import cynar from "../images/Cynar.png";
import fernet from "../images/Fernet.png";
import campari from "../images/Campari.png";
import cointreau from "../images/Cointreau.png";
import sernova from "../images/Sernova.png";
import black from "../images/Black.png";
import havana from "../images/Havana.png";
import beefeater from "../images/Beefeater.png";
import joseCuervo from "../images/JoseCuervo.png";
import carpano from "../images/Carpano.png";
import dry from "../images/Martini.png";
import bianco from "../images/Bianco.png";
import toro from "../images/toro.png";
import cosecha from "../images/Cosecha.png";

const products = [
    { id: 1, title: "Aperol 750ml", description: "Licor botánico italiano, con un sabor cítrico, herbal y agridulce.", image: aperol, price: 15000, category: "Licores" },
    { id: 2, title: "Cynar 750ml", description: "Aperitivo elaborado con alcachofas y hierbas, amargo y digestivo.", image: cynar, price: 8500, category: "Licores" },
    { id: 3, title: "Fernet 750ml", description: "Aperitivo elaborado con hierbas aromáticas y especias digestivas.", image: fernet, price: 18000, category: "Licores" },
    { id: 4, title: "Cointreau 750ml", description: "Licor triple sec de naranja, cítrico, dulce, aromático y brillante.", image: cointreau, price: 25000, category: "Licores" },
    { id: 5, title: "Campari 750ml", description: "Aperitivo rojo italiano, amargo, herbal, cítrico y refrescante.", image: campari, price: 10000, category: "Licores" },
    { id: 6, title: "Sernova 750ml", description: "Destilado premium con notas suaves y carácter único.", image: sernova, price: 9000, category: "Destilados" },
    { id: 7, title: "Black Label 750ml", description: "Whisky escocés premium de blend suave y ahumado.", image: black, price: 34000, category: "Destilados" },
    { id: 8, title: "Beefeater 750ml", description: "Gin londinense clásico, seco, con notas de enebro y cítricos.", image: beefeater, price: 25000, category: "Destilados" },
    { id: 9, title: "Havana 750ml", description: "Ron cubano añejado, suave, con notas de caña y vainilla.", image: havana, price: 10000, category: "Destilados" },
    { id: 10, title: "Jose Cuervo 750ml", description: "Tequila mexicano clásico, suave y versátil para cócteles.", image: joseCuervo, price: 18500, category: "Destilados" },
    { id: 11, title: "Carpano Rosso 750ml", description: "Vermú rojo italiano, dulce y especiado, ideal para Negroni.", image: carpano, price: 8500, category: "Vermouth" },
    { id: 12, title: "Martini Dry 1l", description: "Vermú seco italiano, elegante y refrescante, ideal en coctelería.", image: dry, price: 10000, category: "Vermouth" },
    { id: 13, title: "Carpano Bianco 750ml", description: "Vermú blanco suave y floral, perfecto con tónica o soda.", image: bianco, price: 9000, category: "Vermouth" },
    { id: 14, title: "Vino Toro", description: "Vino tinto potente y expresivo, con cuerpo y taninos firmes.", image: toro, price: 3000, category: "Vinos" },
    { id: 15, title: "Cosecha Tardía 750ml", description: "Vino dulce de cosecha tardía, elegante y con notas frutales.", image: cosecha, price: 8000, category: "Vinos" },
];

export { products };

const Products = ({ filterCategory }) => {
    const { searchQuery } = useApp();

    let filtered = filterCategory
        ? products.filter(p => p.category === filterCategory)
        : products;

    if (searchQuery && searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        );
    }

    return (
        <div className="container-fluid">
            <h2 className="text-light mb-4">
                {searchQuery ? `Resultados para "${searchQuery}"` : "Nuestros productos"}
            </h2>
            {filtered.length === 0 ? (
                <div className="text-center py-5">
                    <i className="bi bi-search fs-1 text-secondary" />
                    <h5 className="mt-3 text-secondary">No se encontraron productos</h5>
                </div>
            ) : (
                <div className="row products-row">
                    {filtered.map((product) => (
                        <div key={product.id} className="col-lg-5th mb-4 col-md-4 col-6 product-item">
                            <Card
                                productId={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;