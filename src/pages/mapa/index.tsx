import { Menu } from "../../components/menu"

const Mapa = () => {
    return (
        <div className='flex mx-auto p-8 bg-gray-100'>
            <div className="flex-auto w-1/5">
                <Menu />
            </div>
            <div className="bg-blue-400 flex-auto w-4/5">
                Mapa com as posições dos parceiros da loja
            </div>
        </div>
    )
}

export { Mapa }