import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import { InputPage } from "../../components/input";
import { ButtonPage } from "../../components/mbutton";
import { Menu } from "../../components/menu";
//import PageMap from "../../components/map";
import { useEffect, useState, useCallback } from "react";
import * as yup from "yup";
import { useStore } from "../../context/protocol.context";
//import { getStore } from "../../service/axios.service";
import { IInputs } from "../../interface/StoreResponse.interface";
import { useLocation, useNavigate } from "react-router-dom";

const schema = yup.object({
    id: yup.string(),
    rua: yup.string().required('Informe o nome da rua'),
    numero: yup.number().min(1).positive('O número não pode ser negativo').integer().required('Informe o número'),
    bairro: yup.string().required('Informe o bairro'),
    cidade: yup.string().required('Informe a cidade'),
    uf: yup.string().required('Informe o estado'),
    celular: yup.number().integer().required('Informe o número de celular'),
    email: yup.string().email('Informe um e-mail válido').required('Informe um email'),
}).required()

const Register = () => {
    //const [lat, setLat] = useState(0);
    //const [lng, setLng] = useState(0);

    const location = useLocation();
    const dataStore = location.state != null ? location.state.store : ''

    const navigate = useNavigate();
    const { handleCreateStore } = useStore();
    const { handleEditStore } = useStore();

    const onSubmitStore = (data: IInputs) => {
        handleCreateStore(data).then(() => navigate('/register'))
    }
    
    // está funcionando, mas precisa ajustar
    const onSubmitEditStore = (data: any) => {
        handleEditStore(dataStore.id, data).then(() => navigate('/'))
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IInputs>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    // useEffect(() => {
    //     console.log(list)
    // }, [])


    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(pos => {
    //         setLat(pos.coords.latitude);
    //         setLng(pos.coords.longitude);
    //     })
    // }, [])

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
                            <InputPage defaultValue={dataStore.name} error={errors.rua} register={register} name="rua" mtype="text" mplaceholder="Rua" />
                            <InputPage error={errors.numero} register={register} name="numero" mtype="number" mplaceholder="Número" />
                            <InputPage error={errors.bairro} register={register} name="bairro" mtype="text" mplaceholder="Bairro" />
                            <div className="flex flex-row justify-between gap-8">
                                <InputPage error={errors.cidade} register={register} name="cidade" mtype="text" mplaceholder="Cidade" />
                                <InputPage error={errors.uf} register={register} name="uf" mtype="text" mplaceholder="UF" />
                            </div>
                            <InputPage error={errors.celular} register={register} name="celular" mtype="number" mplaceholder="Celular" />
                            <InputPage error={errors.email} register={register} name="email" mtype="text" mplaceholder="E-Mail" />
                            <ButtonPage type="submit">Salvar</ButtonPage>
                        </form>
                    </div>
                </div>
                <div className="grid col-span-6 bg-blue-400">
                    {/* <PageMap center={{ lat: lat, lng: lng }} /> */}
                </div>
            </div>
        </div>
    )
}

export { Register }