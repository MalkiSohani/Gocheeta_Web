import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const DKandy = () => {
    const [dKandys, setDKandy] = useState([]); 

 
  useEffect(() => {
    loadDKandys();
   
  }, []);

  const loadDKandys = async () => {
    const result = await axios.get("http://localhost:8080/dkandys");
    
    setDKandy(result.data);
  };
  return (
    <div>
        
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
        <Link className="navbar-brand " style={{color:"yellow"}} to={"/"}><h4><b>GooCheeta</b></h4></Link>

      <ul class="navbar-nav mr-auto">

      <li class="nav-item">
      <a class="nav-link" href="/">Home</a>
      </li>

      <li class="nav-item">
      <a class="nav-link" href="/fkandy">Branch</a>
      </li>
      </ul>  
  
     
    </div>


</nav>
     
     <br></br>
     <h4>BOOKING - KANDY BRANCH</h4>
     <div className={"container"}>
      
            
        <div className="py-4">  
      
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Start</th>
              <th scope="col">End</th>
              <th scope="col">Price (1 km)</th>
              <th scope="col">Distance</th>
              
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
                 
                  
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
      <Link className={"btn btn-primary my-2"} to={"/addbkandy"}>BOOKING</Link>
    </div>

    </div>
    
  );
};

export default DKandy;
