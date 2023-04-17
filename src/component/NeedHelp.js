import React, { Fragment } from 'react'

export default function NeedHelp() {

    return (
        <Fragment>
            <div class="col mx-3 mt-5 need-help" ><br />
                <i class="fas fa-question-circle fa-fw me-3 fa-2x" aria-hidden="true"></i><br />
                <span>Neep Help?</span><br /><br />
                <span>our support team is <br /> your disposal.</span><br /><br />
                <button type="button" className="btn btn-dark mb-3">Get Help</button><br />

            </div>
        </Fragment>
    )
}
