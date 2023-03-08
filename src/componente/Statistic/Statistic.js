import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Statistic = () => {
    const quizData = useLoaderData();
    // console.log(quizData.data[0]);
    // console.log(quizData.data[0].name);
    return (
        <div>
            <h3>This is about Statistic</h3>
            <div>
                <BarChart width={500} height={400} data={quizData.data} >
                    <CartesianGrid strokeDasharray="" />
                    <XAxis dataKey={quizData.data.name} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={quizData.data[0].total} fill="#8884d8" />
                </BarChart>
            </div>

        </div>
    );
};

export default Statistic;