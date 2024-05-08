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

export const edit = (id: any, dataStore: StoreInfo) => {
    return axios.put(`${BASE_URL}/${id}`, ({ id: id, dataStore }))
}