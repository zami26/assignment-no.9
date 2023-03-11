import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Statistic = () => {
    const quizData = useLoaderData();
    const data = [];

    return (
        <div>
            <h3>This is about Statistic</h3>
            <div>
                {
                    (quizData.data).map(singleData => console.log(singleData))
                }
                <BarChart width={500} height={400} data={data} >
                    <CartesianGrid strokeDasharray="" />
                    <XAxis dataKey={data.name} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={data.total} fill="#8884d8" />
                </BarChart>
            </div>

        </div>
    );
};

export default Statistic;