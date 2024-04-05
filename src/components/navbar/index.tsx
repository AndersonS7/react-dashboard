import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <ul className="bg-green-400">
            <li>
                <Link to="/">Dashboard</Link>
            </li>
            <li>
                <Link to="/mapa">Mapa</Link>
            </li>
            <li>
                <Link to="/register">Novo Parceiro</Link>
            </li>
            <li>Sair</li>
        </ul>
    )
}

export { NavBar }