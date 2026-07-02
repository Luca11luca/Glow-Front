import AppRoutes from "./routes/AppRoutes";
import NavBarMobile from "./components/NavBarMobile";
import NavBarDesktop from "./components/NavBarDesktop";
import Header from "./components/Header";
import { ModalLogin } from "./components/ModalLogin";
import { ModalRegister } from "./components/ModalRegister";

function App() {
    return (
        <div className="bg-dark text-light min-vh-100">
            <NavBarMobile />
            <ModalLogin />
            <ModalRegister />
            <header className="py-2 border-bottom border-secondary">
                <Header />
                <NavBarDesktop />
            </header>
            <main className="container mt-4">
                <AppRoutes />
            </main>
        </div>
    );
}

export default App;
