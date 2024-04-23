import React from "react";
import { useState } from "react";
import '../style/Input.scss'

const Input = (props) => {

    const [isValid, setIsValid] = useState(true);

    return(
        <>
        <div className="input-section">
            <label className="input-section__label" htmlFor={props.name}>{props.label}</label>
            <input 
                className={`input-section__input ${isValid ? '' : 'invalid'} `} 
                onChange={(e) => props.setValue(e.target.value)}
                onBlur={(e) => {props.isValid ? setIsValid(props.isValid(e.target.value)) : ''}}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                pattern={props.pattern}
                title={props.title}
                max={props.max}
                autoComplete="off"
                required />
            { isValid ? '' : <p className="input-section__error">{props.error}</p> }
        </div>
        </>
    );
}

export default Input;