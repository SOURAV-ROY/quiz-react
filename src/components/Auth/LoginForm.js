import React from 'react';
import Button from "../Button/Button";
import Form from "../Form/Form";
import TextInput from "../TextInput/TextInput";
import {Link} from "react-router-dom";

function Login() {
    return (

        <Form style={{height: '330px'}}>
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
                Don't have an account? <Link to="signup">Signup</Link> instead.
            </div>
        </Form>

    );
}

export default Login;
