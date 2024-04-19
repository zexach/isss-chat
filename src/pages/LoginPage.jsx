import React from "react";
import LoginForm from "../components/LoginForm";
import '../style/LoginPage.scss'

const LoginPage = () => {

    const handleLoginData = (email, password) => {
        console.log(email + " " + password);
    }

    return(
        <>
            <div className="login-page">
                <LoginForm onLogin={handleLoginData} />
            </div>
        </>
    );
}

export default LoginPage;