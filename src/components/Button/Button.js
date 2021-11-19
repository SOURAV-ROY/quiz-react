import React from 'react';
import sou from './Button.module.css';

function Button({className, children, ...rest}) {
    return (
        <button className={`${className} ${sou.button}`} {...rest}>
            {children}
        </button>
    );
}

export default Button;
