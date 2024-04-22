import React from "react";
import { useState } from "react";
import '../style/RegistrationForm.scss'
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import SelectInput from "./SelectInput";

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

    const handleCityPick = (selectedCity) => {
        setCity(selectedCity);
        console.log(selectedCity);
    }

    const handleLogin = (event) => {
        event.preventDefault();
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
    }

    return(
        <>
            <form className="form" onSubmit={handleLogin}>
                <div className="form__inputs">
                    <div className="form__inputs__sub">
                        <Input
                            setValue={setFullName}
                            label='Full name'
                            name='fullName'
                            type='text'
                            placeholder='John Doe'
                            value={fullName} />
                        <Input
                            setValue={setEmail}
                            label='Email'
                            name='email'
                            type='email'
                            placeholder='example@mail.com'
                            pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
                            title='Email must follow the format example@mail.com'
                            value={email} />
                        <Input
                            setValue={setPassword}
                            label='Password'
                            name='password'
                            type='password'
                            placeholder=''
                            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d]).{8,}'
                            title='Password must contain at least one number and one uppercase and lowercase letter and one special character, and at least 8 or more characters'
                            value={password} />
                        <Input
                            setValue={setBirthDate}
                            label='Date of birth'
                            name='dateOfBirth'
                            type='date'
                            placeholder=''
                            value={birthDate} />
                    </div>
                    <div className="form__inputs__sub">
                        <SelectInput label='Country' onValuePick={handleCityPick} values={props.cities} />
                        <Input
                            setValue={setStreetName}
                            label='Street name'
                            name='streetName'
                            type='text'
                            placeholder='ex. Ulica bosanska'
                            value={streetName} />
                        <Input
                            setValue={setHouseNumber}
                            label='House number'
                            name='houseNumber'
                            type='text'
                            placeholder='ex. 7'
                            value={houseNumber} />
                        <Input
                            setValue={setZipCode}
                            label='Zip code'
                            name='zipCode'
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