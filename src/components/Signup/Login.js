import React from 'react';
import sou from './Login.module.css';
import Illustration from "./Illustration/Illustration";
import Form from "./Form/Form";
import TextInput from "./TextInput/TextInput";
import Button from "./Button/Button";

function Login() {
    return (
        <>
            <h1>Login to your account</h1>

            <div className="column">
                <Illustration/>
                <Form className={`${sou.login}`}>
                    <TextInput
                        type="email"
                        placeholder="Enter email"
                        icon="alternate_email"
                    />

                    <TextInput type="password" placeholder="Enter password" icon="lock"/>

                    <Button>
                        <span>Submit Now</span>
                    </Button>

                    <div className="info">
                        Don't have an account? <a href="signup.html">Signup</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Login;
