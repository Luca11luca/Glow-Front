import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/tercero.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";

const imagenes = [img1, img2, img3, img4, img5];



export default function Carrusel() {
  return (
    <div id="glowCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
      
      {/* Indicadores */}
      <div className="carousel-indicators">
        {imagenes.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#glowCarousel"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-current={i === 0 ? "true" : undefined}
            aria-label={`Slide ${i + 1}`}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner rounded shadow-lg">
        {imagenes.map((img, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
            <img src={img} className="d-block w-100" alt={`Paisaje ${i + 1}`} />
          </div>
        ))}
      </div>

      {/* Controles */}
      <button className="carousel-control-prev" type="button" data-bs-target="#glowCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#glowCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}