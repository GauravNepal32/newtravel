import React from 'react'
import './Destination.css'
import image1 from '../../image/Destination/image-1.jpeg'
import image2 from '../../image/Destination/image-2.jpeg'
import image3 from '../../image/Destination/image-3.jpeg'
import image4 from '../../image/Destination/image-4.jpeg'
import image5 from '../../image/Destination/image-5.jpeg'
const Destination = () => {
    return (
        <div className='px-lg-5'>
            <div className="text-center fancy-font fs-1">
                Destination Lists
            </div>
            <div className="big-heading text-center">Go Exotic Places</div>
            <div className="grid-image-container mt-4">
                <div class="parent">
                    <div class="div1 position-relative">
                        <div className="overlay-wrapper">
                            <img className='grid-image' src={image2} alt="" />
                        </div>
                        <div className="overlay-content-container">
                            <div className="country-name">
                                Chitwan
                            </div>
                        </div>
                    </div>
                    <div class="div2 position-relative">
                        <div className="overlay-wrapper">
                            <img className='grid-image' src={image1} alt="" /> </div>
                        <div className="overlay-content-container">
                            <div className="country-name">
                                Rara
                            </div>
                        </div>
                    </div>
                    <div class="div3 position-relative">
                        <div className="overlay-wrapper">
                            <img className='grid-image' src={image3} alt="" /> </div>
                        <div className="overlay-content-container">
                            <div className="country-name">
                                Koshi
                            </div>
                        </div>
                    </div>
                    <div class="div4 position-relative">
                        <div className="overlay-wrapper">
                            <img className='grid-image' src={image4} alt="" /> </div>
                        <div className="overlay-content-container">
                            <div className="country-name">
                                Jhapa
                            </div>
                        </div>
                    </div>
                    <div class="div5 position-relative">
                        <div className="overlay-wrapper">
                            <img className='grid-image' src={image5} alt="" /> </div>
                        <div className="overlay-content-container">
                            <div className="country-name">
                                Chitlang
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination