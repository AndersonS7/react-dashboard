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
    contact: []
}

const DataContext = createContext<IData>(DATA_CONTEXT_DEFAULT_VALUE);

interface IDataProvider {
    children: React.ReactNode;
}

const DataProvider = ({ children }: IDataProvider) => {

    const usedata = db.partners.map(store => ({
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

    const adress = db.partners.map(store => store.adress)
    const contact = db.partners.map(store => store.contact)

    const customerbase = db.partners.map(store => store.customerbase);
    const conversion = db.partners.map(store => store.conversion);
    const before = db.partners.map(store => store.before);
    const months = db.partners.map(store => store.month);
    const names = db.partners.map(store => store.name);
    const summonths = db.partners.map(store => (
        Object.values(store.month).reduce((a, b) => a + b, 0)
    ));

    return (
        <DataContext.Provider
            value={{
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