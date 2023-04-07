import React, { useState } from 'react';

const ContactDetails = ({ email, number, id, isEdit, editMode, handleChange, deleteMode }) => {

    return (
        <div className="col-lg-3 col-md-3 mt-3 info-box ps-3 pe-1" key={id} style={{ width: 450 }}><br />
            <div className="d-flex justify-content-between">
                <span><i className="fas fa-address-book fa-fw me-1 fa-2x" aria-hidden="true"></i>
                    <span style={{ fontSize: 20, fontWeight: 400 }}>Contact</span></span>
                <div>

                    <i className="fas fa-trash fa-fw me-1 " style={{ color: 'red' }} onClick={() => deleteMode(id)} aria-hidden="true"></i>
                    <i className="fas fa-pencil fa-fw me-1 " style={{ color: 'red' }} onClick={() => editMode(id)} aria-hidden="true"></i></div>
            </div><br />

            <div className="d-flex justify-content-between">
                <span>
                    <i className="fas fa-envelope fa-fw me-1 " aria-hidden="true"></i>
                    {isEdit ? <input type="text" id={id} name="email" value={email} onChange={handleChange} /> : <span>{email}<br /></span>}
                </span>
            </div><br />
            <i className="fas fa-phone fa-fw me-1 " aria-hidden="true"></i>
            {isEdit ? <input type="text" id={id} value={number} name="number" onChange={handleChange} /> : <span>{number}<br /></span>}
        </div>)
}

const AddDetails = ({ addContact, setData, data }) => {

    //generate the new text box
    const addData = (type) => {
        setData((d) => {
            return { ...d, [type]: [...d[type], ''] }
        })
    }

    //set the value inside the data
    const handleValueChange = (e) => {
        const { name, value, id } = e.target
        setData((d) => {
            let cloneValue = { ...d }
            cloneValue[name][id] = value
            return cloneValue
        })
    }

    return (
        <React.Fragment>
            <form onSubmit={(e) => addContact(e, data)}>
                <div className="add-contact-form">
                    <div className="add-contact-email"> Email ID </div>
                    {data.email?.map((res, id) => {
                        return <>
                            <input id={id} className="form-control me-2 bg-light" type="text" name="email" onChange={handleValueChange} placeholder="eg.salesteam@bg.in"></input><br /></>
                    })}
                    <button
                        type="button"
                        className="btn cutom-button"
                        style={{ width: '100%' }}
                        onClick={() => addData('email')}
                    >
                        + Add More
        </button>
                    <div className="add-contact-email"> Contact Number </div>
                    {data.number?.map((res, id) => {
                        return <>
                            <input id={id} className="form-control me-2 bg-light" type="text" name="number" onChange={handleValueChange} placeholder="eg.8978675689"></input><br /></>
                    })}
                    <button
                        type="button"
                        className="btn cutom-button"
                        style={{ width: '100%' }}
                        onClick={() => addData('number')}
                    >
                        + Add More
        </button>
                </div>
                <div className="modal-footer">
                    <button
                        type="submit"
                        className="btn btn-danger"
                        style={{ width: '100%' }}
                        data-bs-dismiss="modal"
                    >
                        save
        </button>
                </div>
            </form>
        </React.Fragment>
    )
}

function ContactModal({ details, setDetails }) {
    const [add, setAdd] = useState(false)
    const [data, setData] = useState({ email: [''], number: [''], isEdit: false })

    // delete contact

    const deleteMode = (id) => {
        setDetails((d) => {
            var cloneDetails = [...d]
            cloneDetails.splice(id, 1)
            return cloneDetails
        })
    }

    // add contact details
    const addContact = (e, data) => {
        e.preventDefault();
        let newData = { ...data }
        newData.email = newData.email?.filter((e) => e).join('/')
        newData.number = newData.number?.filter((e) => e).join('/')

        setDetails((d) => {
            let cloneDetails = [...d]
            cloneDetails.push(newData)
            return cloneDetails
        })

        setAdd(false)
        setData({ email: [''], number: [''], isEdit: false })
    }

    // edit details of contact
    const editMode = (id) => {
        setDetails((d) => {
            let cloneDetails = [...d]
            cloneDetails[id].isEdit = true
            return cloneDetails
        })
    }

    const handleChange = (e) => {
        const { value, name, id } = e.target
        setDetails((d) => {
            let cloneDetails = [...d]
            cloneDetails[id][name] = value
            return cloneDetails
        })
    }

  
    const handleSave = (e) => {

        setDetails((d) => {
            let cloneDetails = [...d]
            cloneDetails.forEach(res => res.isEdit = false)
            return cloneDetails
        })
    }

    return (
        <React.Fragment>
            <div className="modal" id="myModal">
                <div className="modal-dialog modal-dialog-left ">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <div>
                                <div className="d-flex">  <i onClick={() => setAdd(false)} className="fas fa-arrow-left fa-fw me-1 fa-2x " aria-hidden="true"></i>
                                  &nbsp;&nbsp;&nbsp;  <h4 className="modal-title">Contact</h4><br /></div>
                                <h6>Please Provide company email & numbers</h6>
                            </div>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <button
                                type="button"
                                className="btn cutom-button"
                                onClick={() => setAdd(!add)}
                                disabled={add && true}
                            >
                                Add
                            </button><br />
                            {add ?
                                AddDetails({ addContact, setData, data })
                                :
                                details?.map((res, id) => {
                                    return ContactDetails({ ...res, id, editMode, handleChange, deleteMode })
                                })
                            }
                        </div>
                        {/* Modal footer */}
                        {!add &&
                            <div className="modal-footer">
                                <button
                                    type="submit"
                                    className="btn btn-danger"
                                    style={{ width: '100%' }}
                                    data-bs-dismiss="modal"
                                    onClick={handleSave}
                                >
                                    save
        </button>
                            </div>}
                    </div>
                </div>
            </div>

        </React.Fragment>


    );
}

export default ContactModal;
