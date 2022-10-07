import React, { useState, useEffect } from 'react'
import './Select.css'
const Select = () => {
    const [openOption, setOpenOption] = useState(false)
    const [selectedValue, setSelectedValue] = useState('Destination');

    useEffect(() => {
        const concernedElement = document.querySelector(".close-click");
        document.addEventListener("mousedown", (event) => {
            if (concernedElement.contains(event.target)) {

            } else {

                setOpenOption(false)
            }
        });
    }, [openOption])

    return (
        <div className={openOption ? "close-click position-absolute is-open" : 'close-click position-absolute'}>
            <div onClick={() => { setOpenOption(!openOption) }} className="custom-select d-flex align-items-center">
                <div className="select-icon-container d-flex ps-2 align-items-center">
                    <span class="material-symbols-outlined">
                        person_pin_circle
                    </span>
                </div>
                <div className="custom-select-text-container position-relative ms-3 lh-sm">
                    <div className="custom-placeholder-container text-secondary mb-0">
                        Location
                    </div>
                    <div className="selected-option fw-bold mt-0">
                        {selectedValue}
                    </div>
                </div>

            </div>
            <div className={openOption ? 'custom-select-option-container position-relative top-0 d-block mt-1' : 'custom-select-option-container d-none'}>
                <ul class="list-group">
                    <li onClick={() => {
                        setSelectedValue('India')
                        setOpenOption(!openOption)
                    }} class="list-group-item">India</li>
                    <li onClick={() => {
                        setSelectedValue('Nepal')
                        setOpenOption(!openOption)
                    }} class="list-group-item">Nepal</li>
                    <li onClick={() => {
                        setSelectedValue('China')
                        setOpenOption(!openOption)
                    }} class="list-group-item">China</li>
                    <li onClick={() => {
                        setSelectedValue('Bhutan')
                        setOpenOption(!openOption)
                    }} class="list-group-item">Bhutan</li>
                    <li onClick={() => {
                        setSelectedValue('Dubai')
                        setOpenOption(!openOption)
                    }} class="list-group-item">Dubai</li>
                    <li onClick={() => {
                        setSelectedValue('Singapore')
                        setOpenOption(!openOption)
                    }} class="list-group-item">Singapore</li>
                    <li onClick={() => {
                        setSelectedValue('Malaysia')
                        setOpenOption(!openOption)
                    }} class="list-group-item">Malaysia</li>
                </ul>
            </div>
        </div>
    )
}

export default Select