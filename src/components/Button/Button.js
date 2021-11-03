import React from 'react';
import sou from './Button.module.css';

function Button({className, children}) {
    return (
        <div className={`${className} ${sou.button}`}>
            {children}
        </div>
    );
}

export default Button;
