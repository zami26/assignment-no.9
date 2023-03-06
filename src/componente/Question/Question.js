import React, { useState } from 'react';
import './Question.css'
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ allQuestion }) => {
    console.log(allQuestion);
    const { question, options, correctAnswer } = allQuestion;
    const [answer, setAnswer] = useState([]);


    return (
        <div>
            <div className='question shadow p-3 mb-5 bg-body-tertiary rounded'>
                <div className='d-flex justify-content-between'>
                    <p>quiz: {question}</p>
                    <EyeIcon className="icon text-blue-500" />
                </div>
                <div>
                    <div className='row'>
                        <div className="form-check option col me-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" >
                                {options[0]}
                            </label>
                        </div>
                        <div className="form-check option col">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" >
                                {options[1]}
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-check option col me-3 mt-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" >
                                {options[2]}
                            </label>
                        </div>
                        <div className="form-check option col mt-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" >
                                {options[3]}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;