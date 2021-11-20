import React, {Fragment} from 'react';
import Checkbox from "../../../Checkbox/Checkbox";
import sou from './Answers.module.css';

function Answers({options = [], handleChange, input}) {

    return (
        <div className={sou.answers}>
            {options.map((option, index) => (
                <Fragment key={index}>
                    {input ? (
                        <Checkbox
                            key={index}
                            className={sou.answer}
                            text={option.title}
                            value={index}
                            checked={option.checked}
                            onChange={(e) => {
                                handleChange(e, index);
                            }}
                        />
                    ) : (
                        <Checkbox
                            key={index}
                            className={`${sou.answer} ${
                                option.correct
                                    ? sou.correct
                                    : option.checked ? sou.wrong : null
                            }`}
                            text={option.title}
                            defaultChecked={option.checked}
                            disabled
                        />
                    )}
                </Fragment>
            ))}
        </div>
    );
}

export default Answers;
