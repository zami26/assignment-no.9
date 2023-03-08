import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h3 className='my-5'>Welcome to blog page.</h3>
            <div className='shadow p-3 my-5 bg-body-tertiary rounded  text-start'>
                <p className='fw-semibold'>1. What is the purpose of react router? </p>
                <p className='ms-3'> <span className='fw-bold'>Ans. </span>
                    React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.
                </p>

            </div>
            <div className='shadow p-3 my-5 bg-body-tertiary rounded  text-start'>
                <p className='fw-semibold'>
                    2. How does context API works?
                </p>
                <p className='ms-3'> <span className='fw-bold'>Ans. </span>
                    The Context API helps share data between components which you can't easily share with props, for example, complex data objects. React Context API provides a way to send data like userId, auth, and theme data through the component tree without sending any props manually at every level.</p>
            </div>
            <div className='shadow p-3 my-5 bg-body-tertiary rounded  text-start'>
                <p>3. What is "useRef" hook in react js</p>
                <p className='ms-3'> <span className='fw-bold'>Ans. </span>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.

                </p>
            </div>
        </div>
    );
};

export default Blog;