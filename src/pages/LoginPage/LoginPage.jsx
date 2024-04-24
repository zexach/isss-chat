import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import './LoginPage.scss'
import { useAuth } from "../../hooks/AuthProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const auth = useAuth();
    const navigate = useNavigate();

    const handleLoginData = (email, password) => {
        const loginData = {
            email: email,
            password: password
        }

        auth.handleLogin(loginData);
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && token !== null){
            navigate('/dashboard');
        }
    }, []);

    return(
        <>
            <div className="login-page">
                <LoginForm onLogin={handleLoginData} error={auth.error} />
            </div>
        </>
    );
}

export default LoginPage;