import React, { useState, Fragment } from 'react'

export default function InfoBox(props) {

    return (
        <Fragment>
            <div className="col-lg-4 col-md-4 mt-3 info-box ps-3 pe-1" ><br />
                <div className="d-flex justify-content-between">
                    <span><i className={`${props.icon} fa-fw me-1 fa-2x`} aria-hidden="true"></i>
                        <span style={{ fontSize: 20, fontWeight: 400 }}>{props.name}</span></span>
                    <i className="fas fa-pencil fa-fw me-1 " data-bs-toggle="modal"
                        data-bs-target="#myModal" style={{ color: 'red' }} aria-hidden="true"></i>
                </div><br />

                {/* Contact  */}
                {props.details &&
                    <div className="d-flex justify-content-between">
                        <span>
                            <i className="fas fa-envelope fa-fw me-1 " aria-hidden="true"></i>
                            <span>{props.details[0]?.email?.split('/')[0]}/<br /></span>
                            <i className="fas fa-envelope fa-fw me-1 invisible" aria-hidden="true"></i>
                            <span> {props.details[0]?.email?.split('/')[1]}</span><br /></span>
                        <div className="contact-box">
                            <span style={{ color: 'red' }}>+{props.details.length}</span>
                        </div>
                    </div>}

                {/* Address ,House Operation ,Statement*/}
                {(props.name != 'contact' && !props.linkIcon) &&
                    <div className={props.name == 'Statement' && "d-flex justify-content-between"}>
                        <span>{props.spanTax1}</span>
                        {props.spanTax2 && <span>{props.spanTax2}</span>}
                        {props.name == 'Statement' && <div className="contact-box">
                            <span style={{ color: 'red' }}>+1</span>
                        </div>}
                    </div>
                }

                {/* Social Media & Links */}
                {props.linkIcon &&
                    <div className="d-flex justify-content-between">
                        {props.linkIcon.map(res => {
                            return <span>
                                <i className={`${res.icon} fa-fw me-1 fa-2x`} aria-hidden="true"></i><br />
                                {res.name}
                            </span>
                        })}
                    </div>
                }
                {props.details && <i className="fas fa-phone fa-fw me-1 " aria-hidden="true"></i>}
                <span>{props.details && props.details[0]?.number}<br /></span>
            </div>

        </Fragment>
    )
}
