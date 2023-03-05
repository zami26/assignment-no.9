import React from 'react';
import './QuizTopic.css'

const QuizTopic = ({ quiz }) => {
    console.log(quiz);
    return (
        <div>
            <div className='quiz'>
                <img src={quiz.logo} className='card-img-top' alt="" />
                <div className="mt-3">
                    <h5 className="card-title">{quiz.name}</h5>
                    <p>Total Question: {quiz.total}</p>
                    <button className='btn btn-primary'>Start Practice</button>
                </div>
            </div>



        </div>
    );
};

export default QuizTopic;