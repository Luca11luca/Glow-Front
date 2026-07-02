
import Carrusel from "../components/Carrusel";
import Products from "../components/Products";
import Footer from "../components/Footer";
import FooterMobile from "../components/FooterMobile";


export default function Home() {
    const handleAdd = (product) => {
        console.log("Añadido al carrito:", product);
        
    };

    return (
    <div className="container">
      <Carrusel/>
      <Products onAdd={handleAdd} />
      <Footer/>
      <FooterMobile/>
    </div>
  );
}
