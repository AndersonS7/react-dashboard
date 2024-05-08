export interface IInputs {
    rua: string
    numero: number
    bairro: string
    cidade: string
    uf: string
    celular: number
    email: string
}

export interface StoreData {
    data: object
}

export interface StoreInfo {
    id?: string
    name?: string
    customerbase?: number
    conversion?: number
    before?: number
    month?: object
    contact?: Contact
    adress?: Adress
}

export interface Contact {
    phone: number
    email: string
}

export interface Adress {
    road: string
    number: number
    zone: string
    city: string
    uf: string
    center: Center
}

export interface Center {
    lat: number
    lng: number
}