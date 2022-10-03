import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DKandyHome = () => {
    const [dKandys, setDKandy] = useState([]); 

 
  useEffect(() => {
    loadDKandys();
   
  }, []);

  const loadDKandys = async () => {
    const result = await axios.get("http://localhost:8080/dkandys");
    
    setDKandy(result.data);
  };

  const deleteDKandy = async (id) => {
    await axios.delete(`http://localhost:8080/dkandy/${id}`);
    loadDKandys();
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
       <h4>PLACE MANAGEMENT - KANDY BRANCH</h4>
         
         <br></br>
           <div class = "row">
                <div class = "col-lg-3">
                     <a href = "/adddkandy" class = "btn btn-primary "> Add Place</a>
                </div>
                </div>
                
            <div className="py-4">  
          
            <table className="table border shadow">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Start Place</th>
                  <th scope="col">End Place</th>
                  <th scope="col">Price (1 Km)</th>
                  <th scope="col">Distance</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  
                  dKandys.map((dKandy, index) => (
                    <tr>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{dKandy.start}</td>
                      <td>{dKandy.end}</td>
                      <td>{dKandy.one}</td>
                      <td>{dKandy.km}</td>
                     
                      <td>
                        <Link className={"btn btn-primary mx-2"}
                        to={`/viewDKandy/${dKandy.id}`}
                        >View</Link>
                        <Link
                          className={"btn btn-success mx-2"}
                          to={`/editDKandy/${dKandy.id}`}
                        >
                          Edit
                        </Link>
                        <button
                          className={"btn btn-danger mx-2"}
                          onClick={() => deleteDKandy(dKandy.id)}
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

export default DKandyHome;