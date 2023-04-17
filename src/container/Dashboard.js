import React, { useState } from 'react'
import ContactModal from '../component/ContactModal'

export const Dashboard = () => {
    const [details, setDetails] = useState([{ email: 'salesteam@br.in/salesteam@br.in', number: '+91 7990231670', isEdit: false }, { email: 'abc@br.in/abc@br.in', number: '+91 9926754356', isEdit: false }, { email: 'jenvi@br.in/kkk@br.in', number: '+91 9427954247', isEdit: false }])
    return (
        <React.Fragment>
            <div className="col me-3 mt-4 bg-white" ><br />
                <div className="row px-5">
                    <div className="col-12  about-us-main mb-4">
                        <span>About Us</span><br /><br />
                        <div className="d-flex flex-row mt-1">
                            <a className="navbar-brand " href="#">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                    height={40}
                                    alt="MDB Logo"
                                    loading="lazy"
                                />
                            </a>
                            <div className="d-flex flex-column">
                                <span className="at-links">A.T. Inks</span>
                                <span className="digital-link">Digital Links</span>
                            </div>
                            <span className="ms-4">  <i className="fas fa-check-circle fa-fw me-1 fa-1x" aria-hidden="true"></i><br /></span>
                            <a href="#"><small>Verify Company</small></a>
                        </div><br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt,   <i className="fas fa-pencil fa-fw me-1 " style={{ color: 'red' }} aria-hidden="true"></i><br />
                         ut labore et  aliqua.


                    </div>

                    {/* Tab Bar  */}
                    <div className="mb-3">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Info</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Complaints & Feedback</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Privacy Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>


                    <div className="col-lg-12 col-md-12 d-flex justify-content-between">

                        {/* Contact Box */}
                        <div className="col-lg-4 col-md-4 mt-3 info-box ps-3 pe-1" ><br />
                            <div className="d-flex justify-content-between">
                                <span><i className="fas fa-address-book fa-fw me-1 fa-2x" aria-hidden="true"></i>
                                    <span style={{ fontSize: 20, fontWeight: 400 }}>Contact</span></span>
                                <i className="fas fa-pencil fa-fw me-1 " data-bs-toggle="modal"
                                    data-bs-target="#myModal" style={{ color: 'red' }}  aria-hidden="true"></i>
                            </div><br />

                            <div className="d-flex justify-content-between">
                                <span>
                                    <i className="fas fa-envelope fa-fw me-1 " aria-hidden="true"></i>
                                    <span>{details[0]?.email?.split('/')[0]}/<br /></span>
                                    <i className="fas fa-envelope fa-fw me-1 invisible" aria-hidden="true"></i>
                                    <span> {details[0]?.email?.split('/')[1]}</span><br /></span>
                                <div className="contact-box">
                                    <span style={{ color: 'red' }}>+{details.length}</span>
                                </div>
                            </div>
                            <i className="fas fa-phone fa-fw me-1 " aria-hidden="true"></i>
                            <span>{details[0]?.number}<br /></span>
                        </div>

                        {/* Address Box */}
                        <div className="col-lg-4 col-md-4 mt-3 info-box ps-3 pe-1" ><br />
                            <div className=" d-flex justify-content-between">
                                <span><i className="fas fa-map-marker fa-fw me-1 fa-2x" aria-hidden="true"></i>
                                    <span style={{ fontSize: 20, fontWeight: 400 }}>Address</span></span>
                                <i className="fas fa-pencil fa-fw me-1 " style={{ color: 'red' }} aria-hidden="true"></i>
                            </div><br />
                            <span>c-1/ 351/ 4, GIDC Circle,</span>
                            <span>vadodra-363641,Gujarat,India.</span>
                        </div>
                        {/* House Operation box */}
                        <div className="col-lg-4 col-md-4 mt-3 info-box ps-3 pe-1" ><br />
                            <div className=" d-flex justify-content-between">
                                <span><i className="fas fa-home fa-fw me-1 fa-2x" aria-hidden="true"></i>
                                    <span style={{ fontSize: 20, fontWeight: 400 }}>House Operation</span></span>
                                <i className="fas fa-pencil fa-fw me-1 " style={{ color: 'red' }} aria-hidden="true"></i>
                            </div><br />
                            <span>Monday To Friday-09:00 AM To 06:00PM</span>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12 d-flex mb-5">
                        {/* Social Media link Box */}

                        <div className="col-lg-4 col-md-4 mt-3 info-box me-3 ps-3 pe-1"><br />
                            <div className="d-flex justify-content-between">
                                <span><i className="fas fa-link fa-fw me-1 fa-2x" aria-hidden="true"></i>
                                    <span style={{ fontSize: 20, fontWeight: 400 }}>Social Media & Links</span></span>
                                <i className="fas fa-pencil fa-fw me-1 " style={{ color: 'red' }} aria-hidden="true"></i>
                            </div><br />
                            <div className="d-flex justify-content-between">
                                <span>
                                    <i className="fas fa-globe fa-fw me-1 fa-2x" aria-hidden="true"></i><br />
                                WebSite
                                </span>
                                <span>
                                    <i className="fas fa-instagram fa-fw me-1 fa-2x" aria-hidden="true"></i><br />
                                Instagram
                                </span>
                                <span>
                                    <i className="fas fa-facebook fa-fw me-1 fa-2x" aria-hidden="true"></i><br />
                                Facebook
                                </span>

                            </div>
                        </div>
                        {/* statement Box */}
                        <div className="col-lg-4 col-md-4 mt-3 info-box ps-3 pe-1"  > <br />
                            <div className="d-flex justify-content-between">
                                <span><i className="fas fa-quote-left fa-fw me-1 fa-2x" aria-hidden="true"></i>
                                    <span style={{ fontSize: 20, fontWeight: 400 }}>Statement</span></span>
                                <i className="fas fa-pencil fa-fw me-1 " style={{ color: 'red' }} aria-hidden="true"></i>
                            </div><br />
                            <div className="d-flex justify-content-between">
                                <span style={{ marginRight: 30 }}>You Think It Will Link It.</span>

                                <div className="contact-box">
                                    <span style={{ color: 'red' }}>+1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactModal details={details} setDetails={setDetails} />


        </React.Fragment>
    )
}
