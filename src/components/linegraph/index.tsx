//import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useData } from '../../context/data.context';

const LineGraph = () => {
    const { usedata } = useData()

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={usedata}
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
                <Line type="monotone" dataKey="jan" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="fev" stroke="#82ca9d" />
                <Line type="monotone" dataKey="mar" stroke="#000080" />
                {/* <Line type="monotone" dataKey="abr" stroke="#00FFFF" />
                <Line type="monotone" dataKey="mai" stroke="#FF1493" />
                <Line type="monotone" dataKey="jun" stroke="#8B0000" /> */}
            </LineChart>
        </ResponsiveContainer>
    );
}

export { LineGraph }