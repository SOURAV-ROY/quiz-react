import React from 'react';
import sou from './Button.module.css';

function Button({children}) {
    return (
        <div className={sou.button}>
            <span>{children}</span>
        </div>
    );
}

export default Button;
