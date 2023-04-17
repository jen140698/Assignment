import React from 'react';

function Navbar() {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <div className="col-3 d-flex flex-column">
                        <a className="navbar-brand ms-5" href="#">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height={25}
                                alt="MDB Logo"
                                loading="lazy"
                            />
                            <span className="nav-at-links ms-2">A.T. Inks</span><br />
                            <span className="powerby" >Powered by <span className="el">el</span><span id="red">RED</span></span>

                        </a>
                    </div>
                    <div className="col-9">

                        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarText">
                            <div style={{ width: '50%' }}>
                                <input
                                    className="form-control me-2 bg-light"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </div>

                            <ul className="d-flex align-items-center" style={{ marginBottom: 4 }}>
                                <button type="button" class="btn btn-dark">
                                    <i className="fas fa-shopping-cart fa-fw me-1 fa-1x " style={{ color: '#fff' }} aria-hidden="true"></i>&nbsp;&nbsp; Checkout&nbsp;(200)
                                    </button>

                                <li className="nav-item dropdown pe-3">

                                    <a
                                        className="nav-link nav-profile d-flex align-items-center pb-0 pt-0"
                                        href="#"
                                        data-bs-toggle="dropdown"
                                    >
                                        <img
                                            src="https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg"
                                            alt="Profile"
                                            style={{ width: 32 }}
                                            className="rounded-circle"
                                        />
                                        <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                                    </a>
                                    {/* End Profile Iamge Icon */}
                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                        <li className="dropdown-header">
                                            <h6>Kevin Anderson</h6>
                                            <span>Web Designer</span>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item d-flex align-items-center"
                                                href="users-profile.html"
                                            >
                                                <i className="bi bi-person" />
                                                <span>My Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item d-flex align-items-center"
                                                href="users-profile.html"
                                            >
                                                <i className="bi bi-gear" />
                                                <span>Account Settings</span>
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item d-flex align-items-center"
                                                href="pages-faq.html"
                                            >
                                                <i className="bi bi-question-circle" />
                                                <span>Need Help?</span>
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <i className="bi bi-box-arrow-right" />
                                                <span>Sign Out</span>
                                            </a>
                                        </li>
                                    </ul>
                                    {/* End Profile Dropdown Items */}
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>


        </React.Fragment>


    );
}

export default Navbar;
