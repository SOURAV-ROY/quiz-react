import React from 'react';
import sou from './Analysis.module.css';
import Questions from "./Questions/Questions";

function Analysis({answers}) {
    return (
        <div className={sou.analysis}>
            <h1>Question Analysis</h1>
            {/*<h4>You answered 5 out of 10 questions correctly</h4>*/}
            <Questions answers={answers}/>
        </div>
    );
}

export default Analysis;
