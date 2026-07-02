import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Categorias from '../pages/Categorias';
import Favoritos from '../pages/Favoritos';
import Carrito from '../pages/Carrito';
import Ayuda from '../pages/Ayuda';
import Destacados from '../pages/Destacados';
 
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/categorias/:cat" element={<Categorias />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/ayuda" element={<Ayuda />} />
      <Route path="/destacados" element={<Destacados />} />
    </Routes>
  );
}
 