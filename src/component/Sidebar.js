import React from 'react';
import NeedHelp from './NeedHelp'

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
              <i style={{ color: 'red' }} className="fas fa-address-card fa-fw me-3" />
              <span style={{ color: 'red' }}>About Us</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-money-bill fa-fw me-3" />
              <span>Payment Info</span>
            </a>

          </div>
          <NeedHelp />

        </div>
      </nav>





    </React.Fragment>


  );
}

export default Sliderbar;
