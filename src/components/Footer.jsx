import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from "../images/logo.png";

const Footer = () => {
  const qrRef = useRef();
  const url = "https://www.youtube.com/watch?v=iqO41zSH0tM&list=RDiqO41zSH0tM&start_radio=1";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
    script.onload = () => {
      if (qrRef.current && !qrRef.current.hasChildNodes()) {
        new window.QRCode(qrRef.current, {
          text: url,
          width: 100,
          height: 100,
          colorDark: "#00f0ff",
          colorLight: "#0a0a0a",
          correctLevel: window.QRCode.CorrectLevel.H,
        });
      }
    };
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <footer className="bg-dark text-light pt-4 foter">
      <div className="container">
        <div className="row align-items-start">
          {/* Logo */}
          <div className="col-md-3">
            <img src={logo} alt="Logo EB" className="img-fluid mb-2 logo-glow" style={{ maxWidth: '250px' }} />
          </div>

          {/* Links columna 1 */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase">Productos</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Bebidas</a></li>
              <li><a href="#" className="text-light text-decoration-none">Ofertas</a></li>
              <li><a href="#" className="text-light text-decoration-none">Novedades</a></li>
            </ul>
          </div>

          {/* Links columna 2 */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase">Empresa</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Sobre nosotros</a></li>
              <li><a href="#" className="text-light text-decoration-none">Términos</a></li>
              <li><a href="#" className="text-light text-decoration-none">Privacidad</a></li>
            </ul>
          </div>

          {/* Redes + contacto + QR */}
          <div className="col-md-5 mb-4">
            <h6 className="text-uppercase">Contacto</h6>
            <p className="mb-1">📍 Av. Siempreviva 742, Buenos Aires</p>
            <p className="mb-1">📞 +54 11 1234-5678</p>
            <p className="mb-3">✉️ contacto@ejemplo.com</p>

            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-light fs-5"><i className="bi bi-instagram" /></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-facebook" /></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-twitter-x" /></a>
            </div>

            <a href={url} target="_blank" rel="noopener noreferrer" title="Escaneá para ver nuestro video">
              <div ref={qrRef} />
            </a>
            <small className="text-secondary d-block mt-1">Escaneá el QR</small>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-top border-secondary pt-3 pb-2 mt-3">
          <small>&copy; 2025 EB. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;