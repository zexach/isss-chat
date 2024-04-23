import React from "react";
import { useState } from "react";
import '../style/LoginForm.scss'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from "./Input";


const LoginForm = (props) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        if (email !== '' && password !== '') {
            props.onLogin(email, password);
            setEmail('');
            setPassword('');
        }else {
            toast.warn('All fields required')
        }

    }

    return(
        <>
        <form onSubmit={handleLogin} noValidate>
            <div className="login-form">
            <h1 className="login-form__header">Login</h1>
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
                { props.error ? <p className="login-form__error">{props.error}</p> : '' }
                <button className="login-form__button" type="submit">Login</button>
                <p className="login-form__register">Don't have account? 
                    <span onClick={() => navigate('/register')} className="login-form__register__span"> Register now</span>
                </p>
                <ToastContainer />
            </div>
        </form>
        </>
    );
}

export default LoginForm;