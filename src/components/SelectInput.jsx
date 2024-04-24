import React from "react";
import { useState } from "react";
import '../style/SelectInput.scss'

const SelectInput = (props) => {

    const handleValuePick = (event) => {
        props.onValuePick(event.target.value)
    }

    return(
        <>
        <div className="select-input">
            <label className="select-input__label" htmlFor="option">{props.label}</label>
            <select onChange={handleValuePick} className="select-input__select" name="option" required>
                <option value="">Select an option</option>
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