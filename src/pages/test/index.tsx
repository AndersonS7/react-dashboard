
import { Menu } from "../../components/menu";

const Test = () => {
    return (
        <div className='grid grid-cols-12 h-screen bg-gray-200'>
            <div className="grid col-span-2 bg-sky-800 ">
                <Menu />
            </div>
            <div className="grid grid-rows-4 col-span-10 p-8 gap-8">
                <div className="grid grid-cols-4 row-span-1 p-8 gap-8 bg-sky-800">
                    <div className="bg-gray-400 h-full">01</div>
                    <div className="bg-gray-400 h-full">02</div>
                    <div className="bg-gray-400 h-full">02</div>
                    <div className="bg-gray-400 h-full">02</div>
                </div>
                <div className="grid grid-cols-4 row-span-3 p-8 gap-8 bg-sky-800">
                    <div className="col-span-3 bg-gray-400">
                        mapa
                    </div>
                    <div className="col-span-1 bg-gray-400">
                        coluna de valores
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Test }

