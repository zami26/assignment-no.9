import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz.data);
    const { name, questions } = quiz.data;
    return (
        <div>
            <div className='mt-5'>
                <h4>Quiz of {name}</h4>
                {
                    questions.map(allQuestion => <Question
                        key={allQuestion.id}
                        allQuestion={allQuestion}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;