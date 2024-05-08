import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { IInputs, StoreData, StoreInfo } from "../interface/StoreResponse.interface";
import { edit, excluir, postStore } from "../service/axios.service";
import { nanoid } from "nanoid";

interface IStoreContext {
    list: StoreData[];
    setList: (list: StoreData) => void;
    handleCreateStore: (data: IInputs) => any;
    handleDeleteStore: (id: string) => void;
    handleEditStore: (storeId: string, dataStore: StoreInfo) => any //StoreInfo
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

    const handleCreateStore = useCallback(async (data: IInputs) => {
        try {
            const rua = data.rua;
            const numero = data.numero;
            const bairro = data.bairro;
            const cidade = data.cidade;
            const uf = data.uf;
            const celular = data.celular;
            const email = data.email

            await postStore(
                {
                    id: nanoid(),
                    name: "Loja Padrão",
                    customerbase: 8888,
                    conversion: 8,
                    before: 5,
                    month: {
                        "janeiro": 8888,
                        "fevereiro": 8888,
                        "março": 8888,
                        "abril": 8888,
                        "maio": 8888,
                        "junho": 8888,
                        "julho": 8888,
                        "agosto": 8888,
                        "setembro": 8888,
                        "outubro": 8888,
                        "novembro": 8888,
                        "dezembro": 8888
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
                            lat: -6.207654,
                            lng: -38.499460
                        }
                    }
                }

            )

            console.log('Os dados foram enviados')

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

    const handleEditStore = useCallback(async (storeId: string, dataStore: StoreInfo) => {
        try {
            await edit(storeId, dataStore)

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