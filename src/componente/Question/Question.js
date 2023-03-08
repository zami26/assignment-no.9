import React, { useState } from 'react';
import './Question.css'
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ allQuestion }) => {
    // console.log(allQuestion);
    const { question, options, correctAnswer } = allQuestion;
    const [answer, setAnswer] = useState();
    const getSelectedAnswer = (event) => {
        setAnswer(event.target.value);
        // console.log(answer);
    }
    const showCorrectAnswer = () => {
        const answer = { correctAnswer };
        alert(answer.correctAnswer)
    };


    return (
        <div>
            <div className='question shadow p-3 mb-5 bg-body-tertiary rounded'>
                <div className='d-flex justify-content-between'>
                    <p>quiz: {question}</p>
                    <EyeIcon onClick={showCorrectAnswer} className="icon text-blue-500" />



                </div>
                <div>
                    <div className='row'>
                        <div className="form-check option col me-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" value={answer} id="flexRadioDefault1" onChange={getSelectedAnswer} />
                            {options[0]}
                        </div>
                        <div className="form-check option col">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            {options[1]}
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-check option col me-3 mt-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            {options[2]}
                        </div>
                        <div className="form-check option col mt-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            {options[3]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;