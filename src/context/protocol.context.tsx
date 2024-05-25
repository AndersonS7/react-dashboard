import { createContext, useCallback, useContext, useState } from "react";
import { IInputs, StoreData, StoreInfo } from "../interface/StoreResponse.interface";
import { edit, excluir, postStore } from "../service/axios.service";
import { nanoid } from "nanoid";

interface IStoreContext {
    list: StoreData[];
    setList: (list: StoreData) => void;
    handleCreateStore: (data: IInputs) => any;
    handleDeleteStore: (id: string) => void;
    handleEditStore: (storeId: string, dataStore: StoreInfo, data: IInputs) => any //StoreInfo
}

const USER_CONTEX_DEFAULT_VALUES = {
    list: [],
    setList: () => null,
    handleCreateStore: () => null,
    handleDeleteStore: () => null,
    handleEditStore: () => null,
}

const StoreContext = createContext<IStoreContext>(USER_CONTEX_DEFAULT_VALUES);

interface IStoreProvider {
    children: React.ReactNode
}

const StoreProtocolProvider = ({ children }: IStoreProvider) => {
    const [list, setList] = useState<any>([])

    const drawNumber = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    const handleCreateStore = useCallback(async (data: IInputs) => {
        try {
            const nameStore = data.nameStore;
            const customerbase = data.customerbase;
            const rua = data.rua;
            const numero = data.numero;
            const bairro = data.bairro;
            const cidade = data.cidade;
            const uf = data.uf;
            const celular = data.celular;
            const email = data.email;
            const lati = Number(data.lati);
            const long = Number(data.long);

            await postStore(
                {
                    id: nanoid(),
                    name: nameStore,
                    customerbase: customerbase,
                    conversion: drawNumber(1, 10),
                    before: drawNumber(1, 10),
                    month: {
                        "janeiro": drawNumber(1000, 9999),
                        "fevereiro": drawNumber(1000, 9999),
                        "março": drawNumber(1000, 9999),
                        "abril": drawNumber(1000, 9999),
                        "maio": drawNumber(1000, 9999),
                        "junho": drawNumber(1000, 9999),
                        "julho": drawNumber(1000, 9999),
                        "agosto": drawNumber(1000, 9999),
                        "setembro": drawNumber(1000, 9999),
                        "outubro": drawNumber(1000, 9999),
                        "novembro": drawNumber(1000, 9999),
                        "dezembro": drawNumber(1000, 9999)
                    },
                    contact: {
                        phone: celular,
                        email: email
                    },
                    adress: {
                        road: rua,
                        number: numero,
                        zone: bairro,
                        city: cidade,
                        uf: uf,
                        center: {
                            lat: lati,
                            lng: long
                        }
                    }
                }
            )


        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleDeleteStore = useCallback(async (id: string) => {
        try {
            await excluir(id);
        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleEditStore = useCallback(async (storeId: string, dataStore: StoreInfo, data: IInputs) => {
        try {
            await edit(storeId, dataStore, data)

        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <StoreContext.Provider
            value={{
                list,
                setList,
                handleCreateStore,
                handleDeleteStore,
                handleEditStore
            }}>
            {children}
        </StoreContext.Provider>
    )
}

const useStore = () => useContext(StoreContext);

export { StoreProtocolProvider, useStore }