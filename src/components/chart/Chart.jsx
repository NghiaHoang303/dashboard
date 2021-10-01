import React from 'react'
import './chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({data, title, dataKey1,dataKey2, grid}) {
    

    return (
        <div className="chart"> 
            <h3 className="chartTitle">{title}</h3>                    

            <ResponsiveContainer width="100%" 
            aspect={4/1}
             >
                <LineChart  data={data}>
                    <XAxis dataKey="name" stroke="#8884d8"/>
                    <Line type="monotone" dataKey={dataKey1} stroke="#82ca9d" />
                    <Line type="monotone" dataKey={dataKey2} stroke="#4e73fb" />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
