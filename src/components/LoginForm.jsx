import React from "react";
import { useState } from "react";
import '../style/LoginForm.scss'
import { useNavigate } from "react-router-dom";
import Input from "./Input";


const LoginForm = (props) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        props.onLogin(email, password);
        setEmail('');
        setPassword('');
    }

    return(
        <>
        <form onSubmit={handleLogin}>
            <div className="form">
                <Input
                    setValue={setEmail}
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='example@mail.com'
                    value={email} />
                <Input
                    setValue={setPassword}
                    label='Password'
                    name='password'
                    type='password'
                    placeholder=''
                    value={password} />
                <button className="form__button" type="submit">Login</button>
                <p className="form__register">Don't have account? 
                    <span onClick={() => navigate('/register')} className="form__register__span"> Register now</span>
                </p>
            </div>
        </form>
        </>
    );
}

export default LoginForm;