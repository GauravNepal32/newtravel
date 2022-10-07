import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import landing from '../../image/Home/landing.jpg'
import scene from '../../image/Home/image-12.jpeg'
import SearchSlider from '../../Components/Slider/SearchSlider'
import Select from '../../Components/Select/Select'
import Activity from '../../Components/Activity/Activity'
import SelectDate from '../../Components/SelectDate/SelectDate'
import SelectPeople from '../../Components/SelectPeople/SelectPeople'
import Package from '../../Components/Package/Package'

const Home = () => {

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue',
            // padding: 20,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            width: 200,
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <>
            <div>
                <div className="landing-container">
                    {/* <img className='img-fluid' src={landing} alt="" /> */}
                    <div className="h-100">
                        <div className="landing-text-container h-100">
                            <div className="my-auto">
                                <p className="fancy-font text-center mb-0">
                                    Lets Explore
                                </p>
                                <p className='hook-text mt-0 mb-0'>Where would you like to go?</p>
                                <p className="light-text text-center mt-2">Checkout beautiful places around the world</p>
                            </div>
                            <div className="landing-search-container rounded mt-3">
                                <div className="row row-cols-3 rounded w-100">
                                    <div className="col p-0">
                                        <Select />
                                    </div>
                                    <div className="col p-0">
                                        <Activity />
                                    </div>
                                    <div className="col p-0">
                                        <SelectDate />
                                    </div>
                                    <div className="col p-0">
                                        <SelectPeople />
                                    </div>
                                    <div className="col p-0">
                                        <button className='btn search-btn d-flex justify-content-center align-items-center'>
                                            <span class="material-symbols-outlined me-2">
                                                search
                                            </span>
                                            Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="other-way-to-search container px-md-5 mb-5 ">
                    <SearchSlider />
                </div>
                <div className="why-us-container container px-md-5 mb-5">
                    <div className="row row-cols-md-2 row-cols-1">
                        <div className="col">
                            <div className="fancy-font fs-2">
                                Why Choose Us?
                            </div>
                            <div className="big-heading">
                                Plan Your Trip with Elscript
                            </div>
                            <div className="light-text-bottom pt-4">
                                <p>
                                    There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.
                                </p>
                            </div>
                            <div className="list-container pt-4 lh-lg">
                                <ul className='check-list'>
                                    <li>
                                        <span>
                                            Invest in your simply neighborhood
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Support people in free text extreme need
                                        </span>
                                    </li>
                                    <li>
                                        <span> Largest global industrial business community</span> </li>
                                </ul>
                            </div>
                            <div className=" pt-4">
                                <button className='primary-btn btn'>
                                    Book with us now
                                </button>
                            </div>
                        </div>
                        <div className="col text-center position-relative">
                            <div className="grey-circle"></div>
                            <img className='img-fluid circle-img' src={scene} alt="" />
                            <div className="red-circle"></div>
                        </div>
                    </div>
                </div>
                <div className="featured-tours-container container-fluid mb-5 pt-4">
                    <div className="text-center fancy-font fs-1">
                        Featured Tours
                    </div>
                    <div className="big-heading text-center">Most Popular Tours</div>
                    <div className="feature-card-wrapper d-flex mt-4">
                        <Package />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home