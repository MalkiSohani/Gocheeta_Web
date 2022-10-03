import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewDriver = () => {
  const [user, setDriver] = useState({
    name: "",
    nic: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadDriver();
  });

  const loadDriver = async () => {
    const result = await axios.get(`http://localhost:8080/driver/${id}`);
    setDriver(result.data);
  };

  return (

    <div>
        
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
        <Link className="navbar-brand " style={{color:"yellow"}} to={"/"}><h4><b>GooCheeta</b></h4></Link>
    </div>
    </nav>
    <div className="container">
      <div className="row">
        <div
          className={
            "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
          }
        >
          <h2 className={"text-center m-4"}>Driver Detail</h2>

          <div className="card">
            <div className="card-header">
              Details of User id : {user.id}
              <ul className={"list-group list-group-flush"}>
                <li className="list-group-item">
                  <b>Name: </b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>NIC: </b>
                  {user.nic}
                </li>
                <li className="list-group-item">
                  <b>Mobile Number: </b>
                  {user.phone}
                </li>
                
                <li className="list-group-item">
                  <b>Email: </b>
                  {user.email}
                </li>
              </ul>

            </div>

          </div>
          <Link className={"btn btn-primary my-2"} to={"/driver"}>Back to Home</Link>
        </div>

      </div>

    </div>
    </div>
  );
};

export default ViewDriver;