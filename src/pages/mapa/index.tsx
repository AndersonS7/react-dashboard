import { Menu } from "../../components/menu"

const Mapa = () => {
    return (
        <div className='flex mx-auto h-screen p-4 bg-gray-100'>
            <div className="w-1/5">
                <Menu />
            </div>
            <div className="w-4/5 bg-blue-400">
                <p>Página que mostra o mapa</p>
            </div>
        </div>
    )
}

export { Mapa }