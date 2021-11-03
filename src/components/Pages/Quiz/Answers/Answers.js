import React from 'react';
import Checkbox from "../../../Checkbox/Checkbox";
import sou from './Answers.module.css';

function Answers() {
    return (
        <div className={sou.answers}>
            <Checkbox className={sou.answer} text='Test Answers'/>
        </div>
    );
}

export default Answers;
