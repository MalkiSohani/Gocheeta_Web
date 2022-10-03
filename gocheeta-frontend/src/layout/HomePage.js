import React from 'react';
import {Link} from "react-router-dom";
import pic from '../assets/4.jpg'


function HomePage() {
 
   
    return (
       
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand " style={{color:"yellow"}} to={"/"}><h4><b>GooCheeta</b></h4></Link>

              <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
              <a class="nav-link" href="/adduser1">Register</a>
              
              </li>
              <li class="nav-item">
              <a class="nav-link" href="/login">Custormer Login</a>
              </li>

              <li class="nav-item">
              <a class="nav-link" href="/login1">Admin Login</a>
              </li>
              </ul>  
          
             
            </div>


        </nav>
        <div>
        <img src={pic} 
        />
        </div>
        </div>
      
   
      );
    }

export default HomePage;