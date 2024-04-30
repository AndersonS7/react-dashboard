import { InputPage } from "../../components/input";
import { ButtonPage } from "../../components/mbutton";
import { Menu } from "../../components/menu";
import PageMap from "../../components/map";
import { useEffect, useState } from "react";

const Register = () => {
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            setLat(pos.coords.latitude);
            setLng(pos.coords.longitude);
        })
    }, [])

    return (
        <div className='grid grid-cols-12 grid-flow-col h-screen bg-gray-200'>
            <div className="col-span-2 bg-sky-800">
                <Menu />
            </div>
            <div className="grid col-span-10 grid-cols-12 gap-4 p-4 2xl:gap-8 2xl:p-8 grid-flow-col w-full bg-gray-200">
                <div className="grid col-span-6 p-4 2xl:p-8 bg-white">
                    <div className="flex flex-col gap-4 2xl:gap-8">
                        <h2>NOME DO SISTEMA</h2>
                        <form className="flex flex-col gap-2 2xl:gap-4">
                            <InputPage mtype="text" mplaceholder="Rua" />
                            <InputPage mtype="number" mplaceholder="Número" />
                            <InputPage mtype="text" mplaceholder="Bairro" />
                            <div className="flex flex-row justify-between gap-8">
                                <InputPage className="w-3/4 p-2 text-sm 2xl:text-lg border-b-2 mb-8 outline-none border-slate-300" mtype="text" mplaceholder="Cidade" />
                                <InputPage className="w-1/4 p-2 text-sm 2xl:text-lg border-b-2 mb-8 outline-none border-slate-300" mtype="text" mplaceholder="UF" />
                            </div>
                            <InputPage mtype="number" mplaceholder="Celular" />
                            <InputPage mtype="text" mplaceholder="E-Mail" />
                            <ButtonPage type="button">Salvar</ButtonPage>
                        </form>
                    </div>
                </div>
                <div className="grid col-span-6 bg-blue-400">
                    <PageMap center={{ lat: lat, lng: lng }} />
                </div>
            </div>
        </div>
    )
}

export { Register }