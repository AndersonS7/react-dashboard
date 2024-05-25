import { createContext, useContext, useState } from "react";
import db from "../../db/db.json";

interface IData {
    usedata: Array<object>
    customerbase: Array<number>
    summonths: Array<number>
    conversion: Array<number>
    before: Array<number>
    months: Array<object>
    names: Array<string>
    adress: Array<any>
    contact: Array<any>
    idStore: Array<string>
}

const DATA_CONTEXT_DEFAULT_VALUE: IData = {
    usedata: [],
    customerbase: [],
    summonths: [],
    conversion: [],
    before: [],
    months: [],
    names: [],
    adress: [],
    contact: [],
    idStore: []
}

const DataContext = createContext<IData>(DATA_CONTEXT_DEFAULT_VALUE);

interface IDataProvider {
    children: React.ReactNode;
}

const DataProvider = ({ children }: IDataProvider) => {
    const dbDefault = {
        "partners": [{
            "id": "1",
            "name": "Loja Padrão",
            "customerbase": 8888,
            "conversion": 2,
            "before": 4,
            "month": {
                "janeiro": 5555,
                "fevereiro": 3333,
                "março": 5555,
                "abril": 3333,
                "maio": 5555,
                "junho": 3333,
                "julho": 5555,
                "agosto": 3333,
                "setembro": 5555,
                "outubro": 3333,
                "novembro": 5555,
                "dezembro": 3333
            },
            "contact": {
                "phone": 8888888888,
                "email": "lojapadrao@gmail.com"
            },
            "adress": {
                "road": "Rua qualquer",
                "number": "200",
                "zone": "Bairro qualquer",
                "city": "Cidade",
                "uf": "RN",
                "center": {
                    "lat": -5.823263,
                    "lng": -35.253476
                }
            }
        }]
    }

    const dataBase = db.partners.length == 0 ? dbDefault : db

    const usedata = dataBase.partners.map(store => ({
        name: store.name,
        jan: store.month.janeiro,
        fev: store.month.fevereiro,
        mar: store.month.março,
        // abr: store.month.abril,
        // mai: store.month.maio,
        // jun: store.month.junho,
        // jul: store.month.julho,
        // ago: store.month.agosto,
        // set: store.month.setembro,
        // out: store.month.outubro,
        // nov: store.month.novembro,
        // dez: store.month.dezembro
    }))

    const idStore = dataBase.partners.map(store => store.id)
    const adress = dataBase.partners.map(store => store.adress)
    const contact = dataBase.partners.map(store => store.contact)

    const customerbase = dataBase.partners.map(store => store.customerbase);
    const conversion = dataBase.partners.map(store => store.conversion);
    const before = dataBase.partners.map(store => store.before);
    const months = dataBase.partners.map(store => store.month);
    const names = dataBase.partners.map(store => store.name);
    const summonths = dataBase.partners.map(store => (
        Object.values(store.month).reduce((a, b) => a + b, 0)
    ));

    return (
        <DataContext.Provider
            value={{
                idStore,
                usedata,
                customerbase,
                summonths,
                conversion,
                before,
                months,
                names,
                adress,
                contact
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext);

export { DataProvider, useData }