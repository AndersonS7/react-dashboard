import { Link } from "react-router-dom";
import { BsFileBarGraphFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillPlusSquare } from "react-icons/ai";
import { ImExit } from "react-icons/im";

const NavBar = () => {
    return (
        <ul className="flex flex-col 2xl:pt-4 mt-10 2xl:gap-8 gap-4 text-sm 2xl:text-2xl text-sky-50">
            <li className="w-full">
                <Link to="/" className="flex items-center 2xl:gap-4 2xl:p-4 gap-2 p-2 hover:bg-sky-700 w-full">
                    <BsFileBarGraphFill />
                    Dashboard
                </Link>
            </li>
            <li className="w-full" >
                <Link to="/mapa" className="flex items-center 2xl:gap-4 2xl:p-4 gap-2 p-2 hover:bg-sky-700 w-full">
                    <FaMapMarkerAlt />
                    Mapa
                </Link>
            </li>
            <li className="w-full">

                <Link to="/register" className="flex items-center 2xl:gap-4 2xl:p-4 gap-2 p-2 hover:bg-sky-700 w-full">
                    <AiFillPlusSquare />
                    Novo Parceiro
                </Link>
            </li>
            <li className="flex items-center 2xl:gap-4 2xl:p-4 gap-2 p-2 hover:bg-sky-700 w-full">
                <ImExit />
                Sair
            </li>
        </ul>
    )
}

export { NavBar }