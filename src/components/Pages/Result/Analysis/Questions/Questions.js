import React from 'react';
import Answers from "../../../Quiz/Answers/Answers";
import sou from './Question.module.css';

function Questions({answers = []}) {
    return answers.map((answer, index) => (
        <div className={sou.question} key={index}>
            <div className={sou.qtitle}>
                <span className="material-icons-outlined"> help_outline </span>
                {answer.title}
            </div>
            <Answers input={false} options={answer.options}/>
        </div>
    ))
}

export default Questions;
