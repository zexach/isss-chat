import React from "react";
import { useState } from "react";
import '../style/RegistrationForm.scss'
import { useNavigate } from "react-router-dom";
import Input from "./Input";

const RegistrationForm = (props) => {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [streetName, setStreetName] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');



    const handleLogin = (event) => {
        event.preventDefault();
        console.log(fullName + email + password);
    }

    return(
        <>
            <form className="form" onSubmit={handleLogin}>
                <div className="form__inputs">
                    <div className="form__inputs__sub">
                        <Input
                            setValue={setFullName}
                            label='Full name'
                            type='text'
                            placeholder='John Doe'
                            value={fullName} />
                        <Input
                            setValue={setEmail}
                            label='Email'
                            type='email'
                            placeholder='example@mail.com'
                            value={email} />
                        <Input
                            setValue={setPassword}
                            label='Password'
                            type='password'
                            placeholder=''
                            value={password} />
                        <Input
                            setValue={setBirthDate}
                            label='Date of birth'
                            type='date'
                            placeholder=''
                            value={birthDate} />
                    </div>
                    <div className="form__inputs__sub">
                        <Input
                            setValue={setCity}
                            label='City'
                            type='text'
                            placeholder='ex. Sarajevo'
                            value={city} />
                        <Input
                            setValue={setStreetName}
                            label='Street name'
                            type='text'
                            placeholder='ex. Ulica bosanska'
                            value={streetName} />
                        <Input
                            setValue={setHouseNumber}
                            label='House number'
                            type='text'
                            placeholder='ex. 7'
                            value={houseNumber} />
                        <Input
                            setValue={setZipCode}
                            label='Zip code'
                            type='text'
                            placeholder='ex. 72000'
                            value={zipCode} />
                    </div>
                </div>

                <button className="form__button" type="submit">Register</button>
                <p className="form__register">Already have account? 
                    <span onClick={() => navigate('/login')} className="form__register__span"> Login now</span>
                </p>
            </form>
        </>
    );
}

export default RegistrationForm;