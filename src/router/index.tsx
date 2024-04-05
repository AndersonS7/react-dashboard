import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Mapa } from "../pages/mapa";
import { Dashboard } from "../pages/dashboard";
import { Register } from "../pages/novoparceiro";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/mapa" element={<Mapa />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export { Rotas }