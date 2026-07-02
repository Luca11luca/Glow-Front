import React from 'react'
import { useNavigate } from "react-router-dom";
const NavBarDesktop = () => {
  const navigate = useNavigate();
  return (
    
        <nav className="container d-none d-md-flex flex-wrap justify-content-between ">
          <button className="btn btn-glow btn-outline-primary flex-grow-1 m-2 bi bi-house-door" onClick={() => navigate("/")}>
            Inicio
          </button>
          {/* Dropdown Categorías */}
          <div className="dropdown flex-grow-1 m-2">
            <button className="btn btn-glow btn-outline-primary dropdown-toggle w-100 h-100" type="button" id="categoriasDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-grid me-2" />Categorías
            </button>
            <ul className="dropdown-menu bg-dark text-light border-secondary w-100" aria-labelledby="categoriasDropdown">
              <li><button className=" btn btn-glow text-primary bg-dark w-100 text-start mb-1  " type="button" onClick={() => navigate("/categorias/destilados")}>
                Destilados
              </button></li>
              <li><button className=" btn btn-glow text-primary bg-dark w-100 text-start  mb-1" type="button" onClick={() => navigate("/categorias/licores")}>
                Licores
              </button></li>
              <li><button className=" btn btn-glow text-primary bg-dark w-100 text-start mb-1 " type="button" onClick={() => navigate("/categorias/vermouth")}>
                Vermouth
              </button></li>
              <li><button className=" btn btn-glow text-primary bg-dark w-100 text-start  mb-1" type="button" onClick={() => navigate("/categorias/vinos")}>
                Vinos
              </button></li>
            </ul>
          </div>
          <button className="btn btn-glow btn-outline-primary flex-grow-1 m-2" onClick={() => navigate("/destacados")}>
            Destacados
          </button>
          <button className="btn btn-glow btn-outline-primary flex-grow-1 m-2 bi bi-star" onClick={() => navigate("/favoritos")}>
            Favoritos
          </button>
          <button className="btn btn-glow btn-outline-primary flex-grow-1 m-2 bi bi-info-circle" onClick={() => navigate("/ayuda")}>
            Ayuda
          </button>
        </nav>
  )
}

export default NavBarDesktop
