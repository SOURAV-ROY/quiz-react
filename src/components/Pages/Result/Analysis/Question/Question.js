import React from 'react';
import Answers from "../../../Quiz/Answers/Answers";
import sou from './Question.module.css';

function Question() {
    return (
        <div className={sou.question}>
            <div className={sou.qtitle}>
                <span className="material-icons-outlined"> help_outline </span>
                Here goes the question from Learn with SOURAV ?
            </div>
            <Answers/>
        </div>
    );
}

export default Question;
