import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUser] = useState([]); 

 
  useEffect(() => {
    loadUsers();
   
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
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
        <h4>CUSTORMERS MANAGEMENT</h4>
         
         <br></br>
           <div class = "row">
                <div class = "col-lg-3">
                     <a href = "/adduser" class = "btn btn-primary "> Add Custormer</a>
                </div>
                </div>

            <div className="py-4">  
          
            <table className="table border shadow">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile Number</th>
                  <th scope="col">UserName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  
                  users.map((user, index) => (
                    <tr  key = {index}>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{user.name}</td>
                      <td>{user.phone}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        <Link className={"btn btn-primary mx-2"}
                        to={`/viewuser/${user.id}`}
                        >View</Link>
                        <Link
                          className={"btn btn-success mx-2"}
                          to={`/edituser/${user.id}`}
                        >
                          Edit
                        </Link>
                        <button
                          className={"btn btn-danger mx-2"}
                          onClick={() => deleteUser(user.id)}
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

export default Home;