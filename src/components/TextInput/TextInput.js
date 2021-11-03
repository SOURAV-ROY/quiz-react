import React from 'react';
import sou from './TextInput.module.css';

function TextInput({icon, ...rest}) {
    return (
        <div className={sou.textInput}>
            {/*<input type={type} placeholder={placeholder}/>*/}
            {/*<input {...props}/>*/}
            <input {...rest}/>
            <span className="material-icons-outlined"> {icon} </span>
        </div>
    );
}

export default TextInput;
