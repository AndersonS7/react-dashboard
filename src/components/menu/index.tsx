import { NavBar } from "../navbar"
import { TitlePage } from "../titlePage"
import { User } from "../user"

const Menu = () => {
    return (
        <div className="flex flex-auto flex-col h-full items-center bg-red-400">
            <User />
            <TitlePage title="Aroldo Gomes" email="aroldo@gmail.com" />
            <NavBar />
        </div>
    )
}

export { Menu }