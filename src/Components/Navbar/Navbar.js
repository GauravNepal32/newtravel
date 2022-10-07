import React from 'react'
import './Navbar.css'
import logo from '../../image/company/1.webp'
import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Navbar = () => {
    return (
        <div>
            <div className="navbar-top-container">
                <div className="container py-3 px-md-5">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex contact-top">
                            <div className="d-flex">
                                <i class="bi bi-telephone-fill"></i>
                                <p className='ms-3'>9876543210</p>
                            </div>
                            <div className="d-flex ms-3">
                                <i class="bi bi-envelope-fill"></i>
                                <p className="ms-3">info@gmail.com</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="social-links-container">
                                <i class="bi bi-facebook"></i>
                                <i class="bi bi-instagram"></i>
                                <i class="bi bi-twitter"></i>
                                <i class="bi bi-youtube"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg">
                <div class="container px-md-5">
                    <a class="navbar-brand" href="#">
                        <img width={129} height={34} src={logo} alt="" />
                    </a>
                    <button class="navbar-toggler order-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home
                                    <span class="material-symbols-outlined">
                                        expand_more
                                    </span>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tours Page
                                    <span class="material-symbols-outlined">
                                        expand_more
                                    </span>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Destination
                                    <span class="material-symbols-outlined">
                                        expand_more
                                    </span>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    News
                                    <span class="material-symbols-outlined">
                                        expand_more
                                    </span>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                    <span class="material-symbols-outlined">
                                        expand_more
                                    </span>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contact

                                </a>

                            </li>

                        </ul>
                    </div>
                    <div className="outside-navigation-cotnainer d-flex ms-auto me-md-4 me-2">
                        <div className="search-container">
                            <span class="material-symbols-outlined">
                                search
                            </span>
                        </div>
                        <div className="profile-container ms-md-4 ms-2">
                            <span class="material-symbols-outlined">
                                account_circle
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar