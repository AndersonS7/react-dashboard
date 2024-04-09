//import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import db from "../../../db/db.json";

const LineGraph = () => {

    const data = db.partners.map(store => ({
        name: store.name,
        jan: store.month.janeiro,
        fev: store.month.fevereiro
    }))

    // const customerbase = db.partners.map(store => ({
    //     customer: store.customerbase
    // }))

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="jan" stroke="#8884d8" activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="fev" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export { LineGraph }