import { createContext, useContext, useState } from "react";
import db from "../../db/db.json";

interface IData {
    usedata: Array<object>,
    customerbase: Array<number>
    summonths: Array<number>,
    conversion: Array<number>,
    before: Array<number>
}

const DATA_CONTEXT_DEFAULT_VALUE: IData = {
    usedata: [],
    customerbase: [],
    summonths: [],
    conversion: [],
    before: []
}

const DataContext = createContext<IData>(DATA_CONTEXT_DEFAULT_VALUE);

interface IDataProvider {
    children: React.ReactNode;
}

const DataProvider = ({ children }: IDataProvider) => {

    const usedata = db.partners.map(store => ({
        name: store.name,
        jan: store.month.janeiro,
        fev: store.month.fevereiro
    }))

    const customerbase = db.partners.map(store => store.customerbase)
    const conversion = db.partners.map(store => store.conversion)
    const before = db.partners.map(store => store.before)

    const summonths = db.partners.map(store => (
        Object.values(store.month).reduce((a, b) => a + b, 0)
    ))

    return (
        <DataContext.Provider
            value={{
                usedata,
                customerbase,
                summonths,
                conversion,
                before
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext);

export { DataProvider, useData }