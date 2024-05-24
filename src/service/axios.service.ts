import axios, { AxiosResponse } from "axios";
import { IInputs, StoreInfo } from "../interface/StoreResponse.interface";

const BASE_URL = import.meta.env.VITE_SOME_BASE_URL;

export const postStore = <T>(data: StoreInfo): Promise<AxiosResponse<T, any>> => {
    return axios.post(BASE_URL, (data))
}

export const getStore = async <T>(): Promise<AxiosResponse<T, any>> => {
    return axios.get(BASE_URL)
}

export const excluir = (id: string) => axios.delete(`${BASE_URL}/${id}`);

export const edit = (id: string, dataStore: StoreInfo, data: IInputs) => {
    return axios.put(`${BASE_URL}/${id}`, ({
        id: id,
        "name": data.nameStore,
        "customerbase": data.customerbase,
        "conversion": dataStore.conversion,
        "before": dataStore.before,
        "month": dataStore.month,
        "contact": {
            "phone": data.celular,
            "email": data.email
        },
        "adress": {
            "road": data.rua,
            "number": data.numero,
            "zone": data.bairro,
            "city": data.cidade,
            "uf": data.uf,
            "center": {
                "lat": data.lati,
                "lng": data.long
            }
        }
    }))
}