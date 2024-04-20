import React from "react";
import { useState } from "react";
import RegistrationForm from '../components/RegistrationForm'
import '../style/RegistrationPage.scss'

const RegistrationPage = () => {

    return(
        <>
        <div className="registration-page">
            <RegistrationForm />
        </div>
        </>
    );
}

export default RegistrationPage;