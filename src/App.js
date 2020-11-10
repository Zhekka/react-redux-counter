import React from 'react'
import s from './App.module.css';

function App(props) {
    return (
        <div className={`${s.content}`}>
            <h1>Counter</h1>
            <h2>{props.counter}</h2>
            <button className={`${s.btn_minus}`} onClick={() => {
                props.decrement()
            }}>decrement
            </button>
            <button className={`${s.btn_plus}`} onClick={() => {
                props.increment()
            }}>increment
            </button>
        </div>
    );
}

export default App;
