import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const BKandy = () => {
    const [bKandys, setBKandy] = useState([]); 

 
    useEffect(() => {
      loadBKandys();
     
    }, []);
  
    const loadBKandys = async () => {
      const result = await axios.get("http://localhost:8080/bookings");
      
      setBKandy(result.data);
    };
  
    const deleteBKandy = async (id) => {
      await axios.delete(`http://localhost:8080/bookings/${id}`);
      loadBKandys();
    };
      return (
        <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div className="container">
  
                      <Link className="navbar-brand " style={{color:"yellow"}} to={"/"}><h4><b>GooCheeta</b></h4></Link>
  
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <a class="nav-link" href="/dashboard">DASHBOARD</a>
                    
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/dkandy">Kandy</a>
                    </li>
  
                    <li class="nav-item">
                    <a class="nav-link" href="/">Galle</a>
                    </li>
  
                    <li class="nav-item">
                    <a class="nav-link" href="/">Kurunagala</a>
                    </li>
  
                    <li class="nav-item">
                    <a class="nav-link" href="/">Gampaha</a>
                    </li>
  
                    <li class="nav-item">
                    <a class="nav-link" href="/">Nugegoda</a>
                    </li>
  
                    <li class="nav-item">
                    <a class="nav-link" href="/">Jaffna</a>
                    </li>
  
                    </ul>  
                
                   
                  </div>
  
  
              </nav>
          
          <div className={"container"}>
          <br></br>
         <h4>BOOKING MANAGEMENT - KANDY BRANCH</h4>
           
           <br></br>
            
                  
              <div className="py-4">  
            
              <table className="table border shadow">
                <thead>
                  <tr>
                    
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Distance(Km)</th>
                    <th scope="col">Time </th>
                    <th scope="col">Date </th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    
                    bKandys.map((bKandy, index) => (
                      <tr>
                        
                        <td>{bKandy.id}</td>
                        <td>{bKandy.name}</td>
                        <td>{bKandy.phone}</td>
                        <td>{bKandy.distance}</td>
                        <td>{bKandy.time}</td>
                        <td>{bKandy.dateCreated}</td>
                       
                       
                        <td>
                          
                          <button
                            className={"btn btn-danger mx-2"}
                            onClick={() => deleteBKandy(bKandy.id)}
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
  

export default BKandy;