import React from 'react'
import { useNavigate } from "react-router-dom";
const NavBarMobile = () => {
  const navigate = useNavigate();
  return (
    <div className="offcanvas offcanvas-start bg-dark text-light" tabIndex={-1} id="mobileMenu">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menú</h5>
            <button type="button" className="btn" data-bs-dismiss="offcanvas" />
          </div>
          <div className="offcanvas-body">
            <ul className="list-group">
              <li className="list-group-item bg-dark text-light border-secondary">
                <button className="btn btn-glow btn-outline-primary w-100 text-start" onClick={() => navigate("/")}>
                  <i className="bi bi-house-door me-2" />Inicio
                </button>
              </li>
              <li className="list-group-item bg-dark text-light border-secondary">
                <button className="btn btn-glow btn-outline-primary w-100 text-start dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#categoriasMobile" aria-expanded="false" aria-controls="categoriasMobile">
                  <i className="bi bi-grid me-2 btn-glow" />Categorías
                </button>
                <div className="collapse mt-2" id="categoriasMobile">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-dark text-light border-secondary ps-4">
                      <button className="btn btn-glow btn-outline-primary w-100 text-start" onClick={() => navigate("/categorias/destilados")}>
                        Destilados
                      </button>
                    </li>
                    <li className="list-group-item bg-dark text-light border-secondary ps-4">
                      <button className="btn btn-glow btn-outline-primary w-100 text-start" onClick={() => navigate("/categorias/licores")}>
                        Licores
                      </button>
                    </li>
                    <li className="list-group-item bg-dark text-light border-secondary ps-4">
                      <button className="btn btn-glow btn-outline-primary w-100 text-start" onClick={() => navigate("/categorias/vermouth")}>
                        Vermouth
                      </button>
                    </li>
                    <li className="list-group-item bg-dark text-light border-secondary ps-4">
                      <button className="btn btn-glow btn-outline-primary w-100 text-start" onClick={() => navigate("/categorias/vinos")}>
                        Vinos
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-group-item bg-dark text-light border-secondary">
                <button  className="btn btn-glow btn-outline-primary w-100 text-start" onClick={() => navigate("/favoritos")}>
                  <i className="bi bi-star me-2" />Favoritos
                </button>
              </li>
             
              <li className="list-group-item bg-dark text-light border-secondary">
                <button className="btn btn-glow btn-outline-primary w-100 text-start" onClick={() => navigate("/ayuda")}>
                  <i className="bi bi-info-circle me-2" />Ayuda
                </button>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default NavBarMobile
