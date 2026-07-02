import React from 'react'
import { useApp } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const { user, logout, cartCount, searchQuery, setSearchQuery } = useApp()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim()) {
      navigate("/");
    }
  }

  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Hamburguesa */}
        <div className="col-2 text-start d-md-none">
          <button className="btn-glow btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
            <i className="bi bi-list fs-4" />
          </button>
        </div>

        {/* Logo */}
        <div className="col-7 col-md-10 d-flex justify-content-center">
          <img
            src="src/images/x-icon.png"
            alt="GlowBar"
            className="img-fluid logo-glow"
            style={{ maxHeight: '100px', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />
        </div>

        {/* Usuario + Carrito */}
        <div className="col-2 col-md-2 text-center text-md-end">
          <div className="d-flex gap-2 justify-content-end align-items-center">
            <button className="btn btn-outline-primary position-relative" onClick={() => navigate('/carrito')}>
              <i className="bi bi-basket3 fs-5" />
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </button>

            {user ? (
              <div className="dropdown">
                <button className="btn-glow btn btn-outline-primary dropdown-toggle d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown">
                  <i className="bi bi-person-circle fs-4" />
                  <span className="d-none d-md-inline">{user.firstname || 'Cuenta'}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end bg-dark text-light border-secondary">
                  <li><span className="dropdown-item-text text-secondary small">{user.email}</span></li>
                  <li><hr className="dropdown-divider border-secondary" /></li>
                  <li>
                    <button className="dropdown-item text-light bg-dark" onClick={() => navigate('/favoritos')}>
                      <i className="bi bi-heart me-2" />Favoritos
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item text-danger bg-dark" onClick={logout}>
                      <i className="bi bi-box-arrow-right me-2" />Cerrar sesión
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="dropdown">
                <button className="btn-glow btn btn-outline-primary dropdown-toggle d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown">
                  <i className="bi bi-person-circle fs-4" />
                  <span className="d-none d-md-inline">Cuenta</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end bg-dark text-light border-secondary">
                  <li>
                    <button className="dropdown-item text-light bg-dark" data-bs-toggle="modal" data-bs-target="#loginModal">
                      <i className="bi bi-box-arrow-in-right me-2" />Login
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item text-light bg-dark" data-bs-toggle="modal" data-bs-target="#registerModal">
                      <i className="bi bi-person-plus me-2" />Register
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Buscador */}
        <div className="flex-grow-1 position-relative col-8 col-md-10 d-flex justify-content-center mb-3">
          <input
            type="text"
            className="form-control ps-5 search-animated"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
        </div>
      </div>
    </div>
  )
}