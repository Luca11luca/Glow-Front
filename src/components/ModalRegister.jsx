import { useState, useRef } from "react";
import { authService } from "../services/api";
import { useApp } from "../context/AppContext";

export const ModalRegister = () => {
    const { login } = useApp();
    const [form, setForm] = useState({ firstname: "", lastname: "", email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const closeRef = useRef();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const data = await authService.register(form);
            if (data.token) {
                login(data.user, data.token);
                setForm({ firstname: "", lastname: "", email: "", password: "" });
                closeRef.current?.click();
            } else {
                setError(data.msg || "Error al registrarse");
            }
        } catch {
            setError("Error de conexión con el servidor");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal fade" id="registerModal" tabIndex={-1} aria-labelledby="registerModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content bg-dark text-light rounded-4 shadow-lg">
                    <div className="modal-header border-0">
                        <h5 className="modal-title" id="registerModalLabel">
                            <i className="bi bi-person-plus me-2" />Crear cuenta
                        </h5>
                        <button ref={closeRef} type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar" />
                    </div>
                    <div className="modal-body">
                        {error && <div className="alert alert-danger py-2">{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-dark text-light border-secondary"><i className="bi bi-person" /></span>
                                <input name="firstname" type="text" className="form-control bg-dark text-light border-secondary" placeholder="Nombre" value={form.firstname} onChange={handleChange} required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-dark text-light border-secondary"><i className="bi bi-person" /></span>
                                <input name="lastname" type="text" className="form-control bg-dark text-light border-secondary" placeholder="Apellido" value={form.lastname} onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-dark text-light border-secondary"><i className="bi bi-envelope" /></span>
                                <input name="email" type="email" className="form-control bg-dark text-light border-secondary" placeholder="Email" value={form.email} onChange={handleChange} required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-dark text-light border-secondary"><i className="bi bi-lock" /></span>
                                <input name="password" type="password" className="form-control bg-dark text-light border-secondary" placeholder="Contraseña" value={form.password} onChange={handleChange} required />
                            </div>
                            <button type="submit" className="btn btn-success w-100 rounded-pill" disabled={loading}>
                                {loading ? "Registrando..." : "Registrarse"}
                            </button>
                        </form>
                        <p className="text-center mt-3 small">
                            ¿Ya tenés cuenta?{" "}
                            <button className="btn btn-link p-0 text-primary small" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#loginModal">
                                Iniciar sesión
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
