import React from "react";
import { useState } from "react";
import '../style/RegistrationForm.scss'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from "./Input";
import SelectInput from "./SelectInput";
import { NameValidator, EmailValidator, PasswordValidator } from "../validators/Validators";

const RegistrationForm = (props) => {

    const navigate = useNavigate();

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const fullDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [streetName, setStreetName] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');

    const handleCityPick = (selectedCity) => {
        setCity(selectedCity);
    }

    const handleLogin = (event) => {
        event.preventDefault();

        if ((fullName !== '' && NameValidator(fullName)) && (email !== '' && EmailValidator(email)) && 
        (password !== '' && PasswordValidator(password)) && birthDate !== '' && streetName !== '' 
        && houseNumber !== '' && zipCode !== '' && city !== '' )  {
            const userToRegister = {
                "name": fullName,
                "email": email,
                "password": password,
                "birth": birthDate,
                "address": {
                    "streetName": streetName,
                    "houseNumber": houseNumber,
                    "zipCode": zipCode
                },
                "city": {
                    "name": city
                }
            }
    
            props.onRegistration(userToRegister);
        } else {
            toast.warn('All fields required')
        }
    }

    return(
        <>
            <form className="registration-form" onSubmit={handleLogin} noValidate>
                <h1 className="registration-form__header">Register</h1>
                <div className="registration-form__inputs">
                    <div className="registration-form__inputs__sub">
                        <Input
                            setValue={setFullName}
                            isValid={NameValidator}
                            label='Full name*'
                            name='fullName'
                            type='text'
                            placeholder='John Doe'
                            pattern='\b\w{2,}\b(?:.*?\b\w{2,}\b)+'
                            error='Name must contain firstname and lastname'
                            value={fullName} />
                        <Input
                            setValue={setEmail}
                            isValid={EmailValidator}
                            label='Email*'
                            name='email'
                            type='email'
                            placeholder='example@mail.com'
                            pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
                            error='Email must follow the format example@mail.com'
                            value={email} />
                        <Input
                            setValue={setPassword}
                            isValid={PasswordValidator}
                            label='Password*'
                            name='password'
                            type='password'
                            placeholder=''
                            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d]).{8,}'
                            error='Password must include number, uppercase, lowercase, special character, and be at least 8 characters long.'
                            value={password} />
                        <Input
                            setValue={setBirthDate}
                            label='Date of birth*'
                            name='dateOfBirth'
                            type='date'
                            placeholder=''
                            value={birthDate}
                            max={fullDate} />
                    </div>
                    <div className="registration-form__inputs__sub">
                        <SelectInput label='Country*' onValuePick={handleCityPick} values={props.cities} />
                        <Input
                            setValue={setStreetName}
                            label='Street name*'
                            name='streetName'
                            type='text'
                            placeholder='ex. Ulica bosanska'
                            value={streetName} />
                        <Input
                            setValue={setHouseNumber}
                            label='House number*'
                            name='houseNumber'
                            type='text'
                            placeholder='ex. 7'
                            value={houseNumber} />
                        <Input
                            setValue={setZipCode}
                            label='Zip code*'
                            name='zipCode'
                            type='text'
                            placeholder='ex. 72000'
                            value={zipCode} />
                    </div>
                </div>

                <button className="registration-form__button" type="submit">Register</button>
                <p className="registration-form__register">Already have account? 
                    <span onClick={() => navigate('/login')} className="registration-form__register__span"> Login now</span>
                </p>
                <ToastContainer />
            </form>
        </>
    );
}

export default RegistrationForm;