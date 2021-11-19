import React from 'react';
import Checkbox from "../../../Checkbox/Checkbox";
import sou from './Answers.module.css';

function Answers({options = [], handleChange}) {

    return (
        <div className={sou.answers}>
            {options.map((option, index) => (
                <Checkbox
                    className={sou.answer}
                    text={option.title}
                    value={index}
                    key={index}
                    checked={option.checked}
                    onChange={(e) => {
                        handleChange(e, index);
                    }}
                />
            ))}
        </div>
    );
}

export default Answers;
