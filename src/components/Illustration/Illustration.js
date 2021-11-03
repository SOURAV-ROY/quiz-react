import React from 'react';
import signupImg from '../assets/images/signup.svg';
import sou from './Illustration.module.css';

function Illustration() {
    return (
        <div className={sou.illustration}>
            <img src={signupImg} alt="Signup"/>
        </div>
    );
}

export default Illustration;
