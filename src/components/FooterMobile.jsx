import React from "react";
import logo from "../images/logo.png"; // ajusta la ruta si tu logo está en otra carpeta

export default function FooterMobile() {
  return (
    <footer className="footer-mobile" role="contentinfo">
      <div className="social-icons" aria-hidden={false}>
        <a href="#" className="social-link bi bi-instagram ms-3 " aria-label="Instagram"></a>
        <a href="#" className="social-link bi bi-facebook ms-3" aria-label="Facebook"></a>
       
        <a href="#" className="social-link bi bi-twitter ms-3" aria-label="Twitter"></a>
      </div>

      <img src={logo} alt="Logo" className="logo-glow ms-3" />

      <div className="footer-copy">© {new Date().getFullYear()} 2025 EB. Todos los derechos reservados.</div>
    </footer>
  );
}