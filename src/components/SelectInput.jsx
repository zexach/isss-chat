import React from "react";
import { useState } from "react";
import '../style/SelectInput.scss'

const SelectInput = (props) => {

    const handleValuePick = (event) => {
        props.onValuePick(event.target.value)
    }

    return(
        <>
        <div className="form__input">
            <label className="form__input__label" htmlFor="form__input">{props.label}</label>
            <select onChange={handleValuePick} className="form__input__select" name="option" required>
                { props.values ? 
                    props.values.map(
                        (value) => 
                            <option key={value.id} value={value.name}>{value.name}</option>) : 
                    'Error while loading' }
            </select>
        </div>
        </>
    )
}

export default SelectInput;