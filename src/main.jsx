import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <AppProvider>
                <App />
            </AppProvider>
        </BrowserRouter>
    </StrictMode>
);
