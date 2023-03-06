import React from 'react';
import { Link } from 'react-router-dom';
import './QuizTopic.css'

const QuizTopic = ({ quiz }) => {
    const { id, logo, name, total } = quiz;


    return (
        <div>
            <div className='quiz'>
                <img src={logo} className='card-img-top' alt="" />
                <div className="mt-3">
                    <h5 className="card-title">{name}</h5>
                    <p>Total Question: {total}</p>
                    <Link to={`/quiz/${id}`}> <button className='btn btn-primary'>Start Practice</button></Link>
                </div>
            </div>



        </div>
    );
};

export default QuizTopic;