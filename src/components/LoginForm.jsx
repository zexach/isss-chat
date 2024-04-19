import React from "react";
import { useState } from "react";
import '../style/LoginForm.scss'

const LoginForm = (props) => {

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
                <div className="form__input">
                    <label htmlFor="form__input__email">Email</label>
                    <input 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="form__input__email" 
                        type="email" 
                        placeholder="example@mail.com" />
                </div>
                <div className="form__input">
                    <label htmlFor="form__input__password">Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="form__input__password"
                        type="password" />
                </div>
                <button type="submit">Login</button>
            </div>
        </form>
        </>
    );
}

export default LoginForm;