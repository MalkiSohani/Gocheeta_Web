import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const DriverHome = () => {
    const [drivers, setDriver] = useState([]); 

 
  useEffect(() => {
    loadDrivers();
   
  }, []);

  const loadDrivers = async () => {
    const result = await axios.get("http://localhost:8080/drivers");
    
    setDriver(result.data);
  };

  const deleteDriver = async (id) => {
    await axios.delete(`http://localhost:8080/driver/${id}`);
    loadDrivers();
  };
    return (
      <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand " style={{color:"yellow"}} to={"/"}><h4><b>GooCheeta</b></h4></Link>

                  <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                  <a class="nav-link" href="/dashboard"><h6>DASHBOARD</h6></a>
                  </li>
                  </ul>  
                </div>


            </nav>
        
          
        
        <div className={"container"}>
        <br></br>
        <h4>DRIVERS MANAGEMENT</h4>
         
         <br></br>
           <div class = "row">
                <div class = "col-lg-3">
                     <a href = "/adddriver" class = "btn btn-primary "> Add Drivers</a>
                </div>
                </div>
                
            <div className="py-4">  
          
            <table className="table border shadow">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">NIC</th>
                  <th scope="col">Mobile Number</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  
                  drivers.map((driver, index) => (
                    <tr>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{driver.name}</td>
                      <td>{driver.nic}</td>
                      <td>{driver.phone}</td>
                      <td>{driver.email}</td>
                      <td>
                        <Link className={"btn btn-primary mx-2"}
                        to={`/viewdriver/${driver.id}`}
                        >View</Link>
                        <Link
                          className={"btn btn-success mx-2"}
                          to={`/editdriver/${driver.id}`}
                        >
                          Edit
                        </Link>
                        <button
                          className={"btn btn-danger mx-2"}
                          onClick={() => deleteDriver(driver.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        </div>
      );
    };

export default DriverHome;