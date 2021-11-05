import React from 'react';
import Checkbox from "../../../Checkbox/Checkbox";
import sou from './Answers.module.css';

function Answers() {
    return (
        <div className={sou.answers}>
            <Checkbox className={sou.answer} text='Test Answer 1'/>
            <Checkbox className={sou.answer} text='Test Answer 2'/>
            <Checkbox className={sou.answer} text='Test Answer 3'/>
            <Checkbox className={sou.answer} text='Test Answer 4'/>
            <Checkbox className={sou.answer} text='Test Answer 5'/>
            <Checkbox className={sou.answer} text='Test Answer 6'/>
            <Checkbox className={sou.answer} text='Test Answer 7'/>
            <Checkbox className={sou.answer} text='Test Answer 8'/>
            <Checkbox className={sou.answer} text='Test Answer 9'/>
            <Checkbox className={sou.answer} text='Test Answer 10'/>
        </div>
    );
}

export default Answers;
