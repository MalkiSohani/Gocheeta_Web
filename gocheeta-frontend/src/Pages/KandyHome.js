import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const KandyHome = () => {
    const [kandys, setKandy] = useState([]); 

 
  useEffect(() => {
    loadKandys();
   
  }, []);

  const loadKandys = async () => {
    const result = await axios.get("http://localhost:8080/kandys");
    
    setKandy(result.data);
  };

  const deleteKandy = async (id) => {
    await axios.delete(`http://localhost:8080/kandy/${id}`);
    loadKandys();
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
                  <a class="nav-link" href="/kandy">Kandy</a>
                  </li>

                  <li class="nav-item">
                  <a class="nav-link" href="/">Galle</a>
                  </li>

                  <li class="nav-item">
                  <a class="nav-link" href="/">Kurunagala</a>
                  </li>

                  <li class="nav-item">
                  <a class="nav-link" href="/kandy">Gampaha</a>
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
       <h4>VEHICAL MANAGEMENT - KANDY BRANCH</h4>
         
         <br></br>
           <div class = "row">
                <div class = "col-lg-3">
                     <a href = "/addkandy" class = "btn btn-primary "> Add Vehical</a>
                </div>
                </div>
                
            <div className="py-4">  
          
            <table className="table border shadow">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Number</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  
                  kandys.map((kandy, index) => (
                    <tr>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{kandy.name}</td>
                      <td>{kandy.number}</td>
                      <td>{kandy.discription}</td>
                     
                      <td>
                        <Link className={"btn btn-primary mx-2"}
                        to={`/viewKandy/${kandy.id}`}
                        >View</Link>
                        <Link
                          className={"btn btn-success mx-2"}
                          to={`/editKandy/${kandy.id}`}
                        >
                          Edit
                        </Link>
                        <button
                          className={"btn btn-danger mx-2"}
                          onClick={() => deleteKandy(kandy.id)}
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

export default KandyHome;