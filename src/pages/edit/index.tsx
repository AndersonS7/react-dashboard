import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import { InputPage } from "../../components/input";
import { ButtonPage } from "../../components/mbutton";
import { Menu } from "../../components/menu";
import PageMap from "../../components/map";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useStore } from "../../context/protocol.context";
import { useLocation, useNavigate } from "react-router-dom";
import { IInputs, StoreInfo } from "../../interface/StoreResponse.interface";

const schema = yup.object({
    id: yup.string(),
    nameStore: yup.string().required('Informe o nome da loja'),
    customerbase: yup.number().required('Informe o total de cliente'),
    rua: yup.string().required('Informe o nome da rua'),
    numero: yup.number().min(1).positive('O número não pode ser negativo').integer().required('Informe o número'),
    bairro: yup.string().required('Informe o bairro'),
    cidade: yup.string().required('Informe a cidade'),
    uf: yup.string().required('Informe o estado'),
    celular: yup.number().integer().required('Informe o número de celular'),
    email: yup.string().email('Informe um e-mail válido').required('Informe um email'),
    lati: yup.number().required('latitude não selecionada'),
    long: yup.number().required('longitude não selecionada')
}).required()

const EditStore = () => {
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

    const navigate = useNavigate();
    const location = useLocation();
    const storeData = location.state.store
    const { handleEditStore } = useStore();

    const onSubmitStore = (data: IInputs) => {
        handleEditStore(storeData.id, storeData, data).then(() => navigate('/mapa'))
    }

    const handleGetCoordenations = (latitude: number, longitude: number) => {
        setLat(latitude);
        setLng(longitude);
        setValue('lati', latitude);
        setValue('long', longitude);
    }

    // as coordenadas não estão atualizando
    useEffect(() => {
        setLat(storeData.adress.center.lat)
        setLng(storeData.adress.center.lng)
        setValue('lati', storeData.adress.center.lat);
        setValue('long', storeData.adress.center.lng);
    }, [storeData]);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IInputs>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    return (
        <div className='grid grid-cols-12 grid-flow-col h-screen bg-gray-200'>
            <div className="col-span-2 bg-sky-800">
                <Menu />
            </div>
            <div className="grid col-span-10 grid-cols-12 gap-4 p-4 2xl:gap-8 2xl:p-8 grid-flow-col w-full bg-gray-200">
                <div className="grid col-span-6 p-4 2xl:p-8 bg-white">
                    <div className="flex flex-col gap-4 2xl:gap-8">
                        <span className=" bg-amber-400 text-sky-900/70 italic p-2">* Todos os campos são obrigatórios</span>
                        <form className="flex flex-col gap-2 2xl:gap-4" onSubmit={handleSubmit(onSubmitStore)}>
                            <InputPage defaultValue={storeData.name} error={errors.nameStore} register={register} name="nameStore" mtype="text" mplaceholder="Nome da loja" />
                            <InputPage defaultValue={storeData.customerbase} error={errors.customerbase} register={register} name="customerbase" mtype="number" mplaceholder="Base de cliente" />

                            <InputPage defaultValue={storeData.adress.road} error={errors.rua} register={register} name="rua" mtype="text" mplaceholder="Rua" />
                            <InputPage defaultValue={storeData.adress.number} error={errors.numero} register={register} name="numero" mtype="number" mplaceholder="Número" />
                            <InputPage defaultValue={storeData.adress.zone} error={errors.bairro} register={register} name="bairro" mtype="text" mplaceholder="Bairro" />
                            <div className="flex flex-row justify-between gap-8">
                                <InputPage defaultValue={storeData.adress.city} error={errors.cidade} register={register} name="cidade" mtype="text" mplaceholder="Cidade" />
                                <InputPage defaultValue={storeData.adress.uf} error={errors.uf} register={register} name="uf" mtype="text" mplaceholder="UF" />
                            </div>
                            <InputPage defaultValue={storeData.contact.phone} error={errors.celular} register={register} name="celular" mtype="number" mplaceholder="Celular" />
                            <InputPage defaultValue={storeData.contact.email} error={errors.email} register={register} name="email" mtype="text" mplaceholder="E-Mail" />
                            <div className="flex flex-col gap-4">
                                <p className=" bg-amber-400 text-sky-900/70 italic p-2">* Clique no mapa para registrar o local da loja</p>
                                <div className="flex mb-4 w-1/2 text-gray-500/50">
                                    <InputPage value={lat} error={errors.lati} register={register} name="lati" mtype="number" mplaceholder="Latitude" className="cursor-not-allowed outline-none italic" />
                                    <InputPage value={lng} error={errors.long} register={register} name="long" mtype="number" mplaceholder="Longitude" className="cursor-not-allowed outline-none italic" />
                                </div>
                            </div>
                            <ButtonPage type="submit">Salvar</ButtonPage>
                        </form>
                    </div>
                </div>
                <div className="grid col-span-6 bg-blue-400">
                    <PageMap getCoordinates={handleGetCoordenations} center={{ lat: lat, lng: lng }} />
                </div>
            </div>
        </div>
    )
}

export { EditStore }