import React, { useState } from 'react';
import './Question.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ allQuestion }) => {
    const { question, options, correctAnswer } = allQuestion;
    const [answer, setAnswer] = useState();
    const getSelectedAnswer = (event) => {
        setAnswer(event);
        const answer2 = ({ correctAnswer }.correctAnswer);
        if (event === answer2) {
            toast('Your answer is Correct', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
            // alert('Your answer is true.')
        }
        else {
            toast('Sorry, It is wrong answer', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            })

        }
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
                        <label htmlFor='flexRadioDefault' onClick={() => getSelectedAnswer(options[0])} className="form-check option col me-3"> <ToastContainer />
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            {options[0]}
                        </label>
                        <label htmlFor='flexRadioDefault2' onClick={() => getSelectedAnswer(options[1])} className="form-check option col">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            {options[1]}
                        </label>
                    </div>
                    <div className="row">
                        <label htmlFor='flexRadioDefault3' onClick={() => getSelectedAnswer(options[2])} className="form-check option col me-3 mt-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                            {options[2]}
                        </label>
                        <label htmlFor='flexRadioDefault4' onClick={() => getSelectedAnswer(options[3])} className="form-check option col mt-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                            {options[3]}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;