import React from "react";
import { useState } from "react";
import '../style/SelectInput.scss'
import arrowDown from '../assets/arrow-down.svg'
import { useDetectClickOutside } from 'react-detect-click-outside';

const SelectInput = (props) => {

    const [isOpened, setIsOpened] = useState(false);

    const handleCityPick = (city) => {
        props.onCityPick(city.name);
        setIsOpened(false);
    }

    const handleClick = () => {
        setIsOpened(!isOpened);
    }

    const handleClickOutside = () => {
        setIsOpened(false);
    }

    const ref = useDetectClickOutside({ onTriggered: handleClickOutside })

    return(
        <>
        <div className="form__input">
            <label className="form__input__label" htmlFor="form__input">City</label>
            <div className="select" ref={ref}>
                <div onClick={handleClick} className="select__tab">
                    <h3 className="select__tab__type">City</h3>
                    <img src={arrowDown} alt="arrowDown" />
                </div>
                { isOpened ? 
                    <div className="select__types">
                        { props.cities ? props.cities.map((city) => 
                            <p onClick={() => {handleCityPick(city)}} className="select__types__city" key={city.id}>{city.name}</p>) : '' }
                    </div> : '' }
            </div>
        </div>
        </>
    )
}

export default SelectInput;