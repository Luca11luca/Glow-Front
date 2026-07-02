import { useEffect, useRef } from "react";

const pasos = [
    {
        icon: "bi-person-plus",
        color: "#00f0ff",
        titulo: "1. Creá tu cuenta",
        descripcion: "Hacé click en 'Cuenta' arriba a la derecha y seleccioná 'Register'. Completá tu nombre, email y contraseña. ¡Es gratis y rápido!"
    },
    {
        icon: "bi-box-arrow-in-right",
        color: "#ffd700",
        titulo: "2. Iniciá sesión",
        descripcion: "Si ya tenés cuenta, hacé click en 'Cuenta' y luego en 'Login'. Ingresá tu email y contraseña para acceder."
    },
    {
        icon: "bi-search",
        color: "#ff8c00",
        titulo: "3. Buscá productos",
        descripcion: "Usá la barra de búsqueda para encontrar lo que querés, o explorá por categorías: Destilados, Licores, Vermouth y Vinos."
    },
    {
        icon: "bi-heart",
        color: "#ff6b6b",
        titulo: "4. Guardá favoritos",
        descripcion: "Presioná el ❤️ en cualquier producto para guardarlo en tu lista de favoritos. Accedé a ellos desde el menú 'Favoritos'."
    },
    {
        icon: "bi-cart-plus",
        color: "#4ade80",
        titulo: "5. Agregá al carrito",
        descripcion: "Hacé click en 'Agregar' en cualquier producto. Podés sumar varios productos y ajustar las cantidades en el carrito."
    },
    {
        icon: "bi-credit-card",
        color: "#9b59b6",
        titulo: "6. Finalizá tu compra",
        descripcion: "Entrá al carrito desde el ícono de la canasta arriba a la derecha. Revisá tu pedido y hacé click en 'Finalizar compra'."
    },
];

const faqs = [
    { pregunta: "¿Puedo comprar sin registrarme?", respuesta: "No, necesitás una cuenta para agregar productos al carrito y guardar favoritos. El registro es gratuito." },
    { pregunta: "¿Cómo cambio la cantidad de un producto?", respuesta: "En la página del carrito, usá los botones + y − al lado de cada producto para ajustar la cantidad." },
    { pregunta: "¿Puedo eliminar un producto del carrito?", respuesta: "Sí, hacé click en el ícono de basura 🗑️ al lado del producto en el carrito." },
    { pregunta: "¿Qué pasa si olvido mi contraseña?", respuesta: "Por ahora podés contactarnos directamente. Próximamente vamos a agregar recuperación de contraseña." },
];

export default function Ayuda() {
    const qrRef = useRef();
    const url = "https://www.youtube.com/watch?v=n8xLTXVDi-U&list=RDn8xLTXVDi-U&start_radio=1";

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
        script.onload = () => {
            if (qrRef.current && !qrRef.current.hasChildNodes()) {
                new window.QRCode(qrRef.current, {
                    text: url,
                    width: 160,
                    height: 160,
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
        <div className="container py-4">
            {/* Header */}
            <div className="text-center mb-5">
                <h2 className="text-light fw-bold fs-1">
                    <i className="bi bi-info-circle me-2 text-primary" />
                    Centro de Ayuda
                </h2>
                <p className="text-secondary">Todo lo que necesitás saber para usar GlowBar</p>
            </div>

            {/* Pasos */}
            <h4 className="text-light mb-4"><i className="bi bi-list-ol me-2 text-primary" />Cómo usar la tienda</h4>
            <div className="row g-3 mb-5">
                {pasos.map((paso, i) => (
                    <div key={i} className="col-12 col-md-6 col-lg-4">
                        <div
                            className="card bg-dark text-light h-100 p-3"
                            style={{
                                border: `1px solid ${paso.color}44`,
                                borderRadius: "12px",
                                boxShadow: `0 0 15px ${paso.color}22`
                            }}
                        >
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center"
                                    style={{ width: 44, height: 44, background: `${paso.color}22`, border: `1px solid ${paso.color}`, flexShrink: 0 }}
                                >
                                    <i className={`bi ${paso.icon}`} style={{ color: paso.color, fontSize: "1.2rem" }} />
                                </div>
                                <h6 className="mb-0 fw-bold" style={{ color: paso.color }}>{paso.titulo}</h6>
                            </div>
                            <p className="text-secondary small mb-0">{paso.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* FAQ */}
            <h4 className="text-light mb-4"><i className="bi bi-question-circle me-2 text-primary" />Preguntas frecuentes</h4>
            <div className="accordion mb-5" id="faqAccordion">
                {faqs.map((faq, i) => (
                    <div key={i} className="accordion-item bg-dark text-light border-secondary mb-2" style={{ borderRadius: "10px", overflow: "hidden" }}>
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed bg-dark text-light"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#faq${i}`}
                                style={{ borderRadius: "10px" }}
                            >
                                <i className="bi bi-chevron-right me-2 text-primary" />{faq.pregunta}
                            </button>
                        </h2>
                        <div id={`faq${i}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body text-secondary">
                                {faq.respuesta}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* QR */}
            <div className="text-center py-4">
                <div
                    className="d-inline-block p-4 rounded-4"
                    style={{ background: "#0a0a0a", border: "1px solid #00f0ff44", boxShadow: "0 0 30px #00f0ff22" }}
                >
                    <h5 className="text-light mb-1"><i className="bi bi-camera me-2 text-primary" />Tutorial en video</h5>
                    <p className="text-secondary small mb-3">Escaneá el QR o hacé click para ver el tutorial</p>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <div ref={qrRef} className="mx-auto mb-3" style={{ width: 160, height: 160 }} />
                    </a>
                    <br />
                    <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-pill px-4">
                        <i className="bi bi-youtube me-2" />Ver tutorial
                    </a>
                </div>
            </div>
        </div>
    );
}