import React, { useState, useEffect } from 'react'
import './Select.css'
const Activity = () => {
    const [openOption, setOpenOption] = useState(false)
    const [selectedActivity, setSelectedActivity] = useState('Activity');

    useEffect(() => {
        const concernedElement = document.querySelector(".activity-close-click");
        document.addEventListener("mousedown", (event) => {
            if (concernedElement.contains(event.target)) {

            } else {

                setOpenOption(false)
            }
        });
    }, [openOption])

    return (
        <div className={openOption ? "position-absolute activity-close-click is-open" : 'position-absolute activity-close-click'}>
            <div onClick={() => { setOpenOption(!openOption) }} className="custom-select d-flex align-items-center">
                <div className="select-icon-container d-flex ps-2 align-items-center">
                    <span class="material-symbols-outlined">
                        nordic_walking
                    </span>
                </div>
                <div className="custom-select-text-container position-relative ms-3 lh-sm">
                    <div className="custom-placeholder-container text-secondary mb-0">
                        Activity
                    </div>
                    <div className="selected-option fw-bold mt-0">
                        {selectedActivity}
                    </div>
                </div>

            </div>
            <div className={openOption ? 'custom-select-option-container position-relative top-0 d-block mt-1' : 'custom-select-option-container d-none'}>
                <ul class="list-group">
                    <li onClick={() => {
                        { console.log('adventure') }
                        setSelectedActivity('Adventure')
                        setOpenOption(!openOption)
                    }} class="list-group-item">Adventure</li>
                    <li onClick={() => {
                        setSelectedActivity('Beach')
                        setOpenOption(!openOption)
                    }} class="list-group-item">Beach</li>
                    <li onClick={() => {
                        setSelectedActivity('City Tours')
                        setOpenOption(!openOption)
                    }} class="list-group-item">City Tours</li>
                    <li onClick={() => {
                        setSelectedActivity('Discovery')
                        setOpenOption(!openOption)
                    }} class="list-group-item">Discovery</li>
                    <li onClick={() => {
                        setSelectedActivity('Cruises')
                        setOpenOption(!openOption)
                    }} class="list-group-item">Cruises</li>
                    <li onClick={() => {
                        setSelectedActivity('History')
                        setOpenOption(!openOption)
                    }} class="list-group-item">History</li>
                </ul>
            </div>
        </div>
    )
}

export default Activity