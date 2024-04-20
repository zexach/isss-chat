import React from "react";
import { useState } from "react";
import '../style/Input.scss'

const Input = (props) => {

    return(
        <>
        <div className="form__input">
            <label htmlFor="form__input">{props.label}</label>
            <input 
                onChange={(e) => props.setValue(e.target.value)} 
                className="form__input" 
                type={props.type} 
                placeholder={props.placeholder}
                value={props.value}
                required />
        </div>
        </>
    );
}

export default Input;