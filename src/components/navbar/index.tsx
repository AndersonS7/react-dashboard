import { Link } from "react-router-dom";
import { BsFileBarGraphFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillPlusSquare } from "react-icons/ai";
import { ImExit } from "react-icons/im";

const NavBar = () => {
    return (
        <ul className="flex flex-col mt-16 gap-8 text-2xl text-sky-50">
            <li className="flex items-center gap-4 p-2 hover:bg-sky-700">
                <BsFileBarGraphFill />
                <Link to="/">Dashboard</Link>
            </li>
            <li className="flex items-center gap-4 p-2 hover:bg-sky-700" >
                <FaMapMarkerAlt />
                <Link to="/mapa">Mapa</Link>
            </li>
            <li className="flex items-center gap-4 p-2 hover:bg-sky-700">
                <AiFillPlusSquare />
                <Link to="/register">Novo Parceiro</Link>
            </li>
            <li className="flex items-center gap-4 p-2 hover:bg-sky-700">
                <ImExit />
                Sair
            </li>
        </ul>
    )
}

export { NavBar }