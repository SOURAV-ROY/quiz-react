import React from 'react';
import sou from './Illustration.module.css';
import signupImg from '../../assets/images/signup.svg';

function Illustration() {
    return (
        <div className={sou.illustration}>
            <img src={signupImg} alt="Signup"/>
        </div>
    );
}

export default Illustration;
