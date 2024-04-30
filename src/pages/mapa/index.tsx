import PageMap from "../../components/map";
import { Menu } from "../../components/menu";
import { RiAddBoxFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { FaStore } from "react-icons/fa";
import { ButtonPage } from "../../components/mbutton";
import { InfoBoxStore } from "../../components/infobox";
import { useData } from "../../context/data.context";

const Mapa = () => {
    const [currentStore, setCurrentSore] = useState(0);

    const { names } = useData();
    const { adress } = useData();
    const { contact } = useData();

    const handleChange = (value: string) => {
        setCurrentSore(Number(value));
    }

    return (
        <div className='grid grid-cols-12 grid-flow-col h-screen bg-gray-200'>
            <div className="col-span-2 bg-sky-800">
                <Menu />
            </div>
            <div className="grid col-span-10 grid-rows-6 2xl:gap-8 2xl:p-8 gap-4 p-4 grid-flow-col w-full">
                <div className="flex justify-between items-center text-lg 2xl:text-2xl h-full text-sky-800">
                    <div className="flex h-1/4 2xl:h-1/2 gap-8 w-1/2 items-center">
                        <ButtonPage type="button">
                            <RiAddBoxFill className="2xl:text-4xl mr-4" />
                            Adicionar Loja
                        </ButtonPage>
                        <ButtonPage type="button">
                            <MdDelete className="2xl:text-4xl mr-4" />
                            Remover Loja
                        </ButtonPage>
                    </div>
                    <label className="flex justify-end w-1/2 items-center gap-4">
                        <FaStore className="2xl:text-4xl mr-4" />
                        Selecione uma loja:
                        <select className=" text-sm 2xl:text-2xl px-4 py-2 w-2/6" value={currentStore} onChange={(event) => handleChange(event.target.value)}>
                            {names.map((name, index) => (
                                <option value={index}>{name}</option>
                            ))}
                        </select>
                    </label>
                </div>
                <div className="grid grid-cols-4 row-span-5 gap-x-32">
                    <div className="col-span-4 drop-shadow-lg bg-white">
                        <PageMap center={adress[currentStore].center}>
                            <InfoBoxStore adress={adress[currentStore]} contact={contact[currentStore]} name={names[currentStore]} />
                        </PageMap>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Mapa }

