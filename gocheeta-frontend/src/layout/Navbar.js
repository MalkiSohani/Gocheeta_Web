import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand " style={{color:"yellow"}} to={"/"}><h4><b>GooCheeta</b></h4></Link>

                  <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                  <a class="nav-link" href="/driver">Driver Management</a>
                  
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="/">Custormers Management</a>
                  </li>

                  <li class="nav-item">
                  <a class="nav-link" href="/">Booking Details</a>
                  </li>

                  <li class="nav-item">
                  <a class="nav-link" href="/">Bill Details</a>
                  </li>

                  <li class="nav-item">
                  <a class="nav-link" href="/">Branches</a>
                  </li>

                  </ul>  
              
                 
                </div>


            </nav>
        </div>
    );
};

export default Navbar;