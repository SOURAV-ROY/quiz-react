import React from 'react';
import Illustration from "../Illustration/Illustration";
import SignupForm from "./SignupForm";


function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration/>
                <SignupForm/>
            </div>
        </>
    );
}

export default Signup;
