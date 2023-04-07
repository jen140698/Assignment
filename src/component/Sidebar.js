import React from 'react';

function Sliderbar() {

  return (
    <React.Fragment>



      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white mx-4"
      >
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4 mb-5">
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple mb-4 mt-4"
              aria-current="true"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height={25}
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple "
            >
              <i className="fas fa-dashboard fa-fw me-3" />
              <span>Dashboard</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-first-order fa-fw me-3" />
              <span>Orders</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-users fa-fw me-3" />
              <span>Teams Members</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-handshake fa-fw me-3" />
              <span>Partners</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-product-hunt fa-fw me-3" />
              <span>Product Listing</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-award fa-fw me-3" />
              <span>Awards </span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple active"
            >
              <i  style={{color:'red'}} className="fas fa-address-card fa-fw me-3" />
              <span  style={{color:'red'}}>About Us</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-money-bill fa-fw me-3" />
              <span>Payment Info</span>
            </a>

          </div>
          <div class="col mx-3 mt-5 need-help" ><br/>
            <i class="fas fa-question-circle fa-fw me-3 fa-2x" aria-hidden="true"></i><br/>
            <span>Neep Help?</span><br/><br/>
            <span>our support team is <br/> your disposal.</span><br/><br/>
            <button type="button" className="btn btn-dark mb-3">Get Help</button><br/>

          </div>
        </div>
      </nav>





    </React.Fragment>


  );
}

export default Sliderbar;
