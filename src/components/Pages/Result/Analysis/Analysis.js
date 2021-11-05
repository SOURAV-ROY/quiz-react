import React from 'react';
import sou from './Analysis.module.css';
import Question from "./Question/Question";

function Analysis() {
    return (
        <div className={sou.analysis}>
            <h1>Question Analysis</h1>
            <h4>You answered 5 out of 10 questions correctly</h4>
            <Question/>
        </div>
    );
}

export default Analysis;
