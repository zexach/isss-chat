import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from '../components/RegistrationForm'
import '../style/RegistrationPage.scss'
import axios from "axios";
import { useAuth } from "../hooks/AuthProvider";

const RegistrationPage = () => {

    const auth = useAuth();
    const navigate = useNavigate();
    const [cities, setCities] = useState();

    const handleRegisterData = (data) => {
        auth.handleRegistration(data);
    }

    const getCities = async() => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/city')
            setCities(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && token !== null){
            navigate('/dashboard');
        }
        getCities();
    }, [])

    return(
        <>
        <div className="registration-page">
            <RegistrationForm onRegistration={handleRegisterData} cities={cities} />
        </div>
        </>
    );
}

export default RegistrationPage;