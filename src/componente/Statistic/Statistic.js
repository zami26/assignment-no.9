import React from "react";
import './statistic.css'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend
} from "recharts";

const Statistic = () => {
    const data = [
        {
            id: 1,
            name: 'React',
            logo: 'https://live.staticflickr.com/65535/52413593240_e00326e727_o.png',
            total: 8
        },
        {
            id: 2,
            name: 'JavaScript',
            logo: 'https://live.staticflickr.com/65535/52412638962_12e932256a_o.png',
            total: 9
        },
        {
            id: 4,
            name: 'CSS',
            logo: 'https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png',
            total: 8
        },
        {
            id: 5,
            name: 'Git',
            logo: 'https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png',
            total: 11
        }
    ];
    return (
        <div>
            <h3>This is about Statistic</h3>

            <div className="mx-auto">
                <BarChart
                    width={700}
                    height={500}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 120,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey='' />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default Statistic;