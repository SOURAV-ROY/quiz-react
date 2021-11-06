import React from 'react';
import sou from './Button.module.css';

function Button({className, children}) {
    return (
        <button className={`${className} ${sou.button}`}>
            {children}
        </button>
    );
}

export default Button;
