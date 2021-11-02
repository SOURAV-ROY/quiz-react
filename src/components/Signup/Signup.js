import React from 'react';
import Checkbox from "./Checkbox/Checkbox";
import Form from "./Form/Form";
import Illustration from "./Illustration/Illustration";
import sou from './Signup.module.css';
import TextInput from "./TextInput/TextInput";
import Button from "./Button/Button";

function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration/>
                <Form className={sou.signup}>
                    <TextInput
                        type='text'
                        placeholder='Enter Name'
                        icon='person'
                    />
                    <TextInput
                        type='email'
                        placeholder='Enter Email'
                        icon='alternate_email'
                    />
                    <TextInput
                        type='password'
                        placeholder='Enter Password'
                        icon='lock'
                    />
                    <TextInput
                        type='password'
                        placeholder='Confirm Password'
                        icon='lock_clock'
                    />
                    <Checkbox text="I agree to the Terms &amp; Condition"/>
                    <Button>Submit Now</Button>
                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Signup;
