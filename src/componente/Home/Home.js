import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../quiz-topic/QuizTopic';
import './Home.css'

const Home = () => {
    const quizzes = useLoaderData();
    // const showQuestion = () => {
    //     console.log()
    // }

    return (
        <div>
            <div className='header d-flex align-items-center'>
                <img src="picture/background.jfif" alt="" />
                <div className='ms-5 background'>
                    <h2>Test Yourself.....!!!</h2>
                    <p>Self-testing through quizzes can be an effective way to assess one's understanding of a particular topic. By taking a quiz, individuals can evaluate their knowledge, identify areas where they need to improve, and gain confidence in their abilities. Moreover, quizzes can provide immediate feedback, which can help individuals learn from their mistakes and reinforce their understanding of the topic. Ultimately, self-testing through quizzes can be a valuable tool for self-improvement and learning.</p>
                </div>
            </div>

            <h2 className='quiz-heading'>We Offering You....!!!!!  </h2>
            <div className='d-flex justify-content-evenly'>
                {
                    (quizzes.data).map(quiz => <QuizTopic
                        key={quiz.id}
                        quiz={quiz}
                    // showQuestion={showQuestion}
                    ></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default Home;