import React from 'react';
import './Question.css'

const Question = ({ allQuestion }) => {
    console.log(allQuestion);
    const { question, options } = allQuestion

    return (
        <div>
            <div className='question'>
                <p>quiz: {question}</p>
                <div className=' question'>
                    <div className="form-check option">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">
                            {options[0]}
                        </label>
                    </div>
                    <div className="form-check option">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label className="form-check-label" for="flexRadioDefault2">
                            {options[1]}
                        </label>
                    </div>
                    <div className="form-check option">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label className="form-check-label" for="flexRadioDefault2">
                            {options[2]}
                        </label>
                    </div>
                    <div className="form-check option">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label className="form-check-label" for="flexRadioDefault2">
                            {options[3]}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;