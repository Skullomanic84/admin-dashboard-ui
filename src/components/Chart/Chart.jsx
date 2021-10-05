import React from 'react'
import './chart.css'
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart({title, data, grid}) {

    return (
        <div className='chart'>
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <BarChart 
                data={data}
                margin={{
                    top: 5,
                    right: 20,
                    left: 20,
                    bottom: 5,
                }}>
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#000" />
                    <Bar dataKey="revenue"  fill="#82ca9d" />
                    <Bar dataKey="cost"  fill="red" />
                </BarChart>
            
            </ResponsiveContainer>

        </div>
    )
}

export default Chart
