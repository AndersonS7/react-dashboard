import { NavBar } from "../navbar"
import { TitlePage } from "../titlePage"
import { User } from "../user"

const Menu = () => {
    return (
        <div className="bg-red-400 flex flex-auto flex-col items-center">
            <User />
            <TitlePage title="Aroldo Gomes" email="aroldo@gmail.com" />
            <NavBar />
        </div>
    )
}

export { Menu }