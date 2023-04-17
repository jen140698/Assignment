import React, { useState } from 'react'
import ContactModal from '../component/ContactModal'
import InfoBox from '../component/InfoBox'

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
                        <InfoBox icon="fas fa-address-book" name="Contact" details={details} />

                        {/* Address Box */}
                        <InfoBox icon="fas fa-envelope" name="Address" spanTax1="c-1/ 351/ 4, GIDC Circle," spanTax2="vadodra-363641,Gujarat,India." />

                        {/* House Operation box */}
                        <InfoBox icon="fas fa-home" name="House Operation" spanTax1="Monday To Friday-09:00 AM To 06:00PM" />


                    </div>

                    <div className="col-lg-12 col-md-12 d-flex mb-5">
                        {/* Social Media link Box */}
                        <InfoBox icon="fas fa-link" linkIcon={[{ icon: "fas fa-globe", name: 'WebSite' }, { icon: 'fas fa-instagram', name: 'Instagram' }, { icon: 'fas fa-facebook', name: 'Facebook' }]} name="Social Media & Links" spanTax1="WebSite" />

                        {/* statement Box */}
                        <InfoBox icon="fas fa-quote-left" name="Statement" spanTax1="You Think It Will Link It." />

                    </div>
                </div>
            </div>
            <ContactModal details={details} setDetails={setDetails} />


        </React.Fragment>
    )
}
