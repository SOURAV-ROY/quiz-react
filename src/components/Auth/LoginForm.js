import React, {useState} from 'react';
import Button from "../Button/Button";
import Form from "../Form/Form";
import TextInput from "../TextInput/TextInput";
import {Link, useHistory} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const {login} = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            history.push("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Login Failed!");
        }
    }

    return (

        <Form style={{height: '330px'}} onSubmit={handleSubmit}>
            <TextInput
                type="email"
                placeholder="Enter email"
                icon="alternate_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextInput
                type="password"
                placeholder="Enter password"
                icon="lock"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button disabled={loading} type="submit">
                <span>Submit Now</span>
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Don't have an account? <Link to="signup">Signup</Link> instead.
            </div>
        </Form>

    );
}

export default Login;
