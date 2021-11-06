import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {useAuth} from '../../contexts/AuthContext';
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Form from "../Form/Form";
import TextInput from "../TextInput/TextInput";

export default function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const {signup} = useAuth();
    const history = useHistory();


    async function handleSubmit(e) {
        e.preventDefault();
        // Do Validation
        if (password !== confirmPassword) {
            return setError('Passwords do not match');
        }
        try {
            setError("");
            setLoading(true);
            await signup(email, password, username);
            history.push('/');

        } catch (err) {
            console.log(err);
            setLoading(false);
            setError('Fail To Create Account');
        }
    }

    return (
        <Form style={{height: '500px'}} onSubmit={handleSubmit}>
            <TextInput
                type='text'
                required
                placeholder='Enter Name'
                icon='person'
                value={username}
                onClick={(e) => setUsername(e.target.value)}
            />
            <TextInput
                type='email'
                required
                placeholder='Enter Email'
                icon='alternate_email'
                value={email}
                onClick={(e) => setEmail(e.target.value)}
            />
            <TextInput
                type='password'
                required
                placeholder='Enter Password'
                icon='lock'
                value={password}
                onClick={(e) => setPassword(e.target.value)}
            />
            <TextInput
                type='password'
                required
                placeholder='Confirm Password'
                icon='lock_clock'
                value={confirmPassword}
                onClick={(e) => setConfirmPassword(e.target.value)}
            />
            <Checkbox
                text="I agree to the Terms &amp; Condition"
                required
                value={agree}
                onClick={(e) => setAgree(e.target.value)}
            />

            <Button disabled={loading} type='submit'>
                <span>Submit Now</span>
            </Button>

            {error && <p className='error'>{error}</p>}

            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
}