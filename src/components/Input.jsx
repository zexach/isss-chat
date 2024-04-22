import React from "react";
import { useState } from "react";
import '../style/Input.scss'

const Input = (props) => {

    const [isValid, setIsValid] = useState(false);

    return(
        <>
        <div className="form__input">
            <label className="form__input__label" htmlFor={props.name}>{props.label}</label>
            <input 
                className="form__input" 
                onChange={(e) => props.setValue(e.target.value)} 
                name={props.name}
                type={props.type} 
                placeholder={props.placeholder}
                value={props.value}
                pattern={props.pattern}
                title={props.title}
                required />
        </div>
        </>
    );
}

export default Input;