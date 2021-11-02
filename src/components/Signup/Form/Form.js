import React from 'react';
import sou from './Form.module.css';

function Form({children, className, ...rest}) {
    return (
        <form className={`${className} ${sou.form}`} action="#" {...rest}>
            {children}
        </form>
    );
}

export default Form;
