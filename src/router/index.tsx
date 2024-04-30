import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Mapa } from "../pages/mapa";
import { Register } from "../pages/novoparceiro";
import { DataProvider } from "../context/data.context";
import { Test } from "../pages/test";
import { Dashboard } from "../pages/dashboard";

const AppRouter = () => {
    return (
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/mapa" element={<Mapa />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/teste" element={<Test />} />
                </Routes>
            </BrowserRouter>
        </DataProvider>
    )
}

export { AppRouter }