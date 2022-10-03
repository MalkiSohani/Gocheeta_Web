import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewKandy = () => {
  const [user, setKandy] = useState({
    name: "",
    number: "",
    discripton: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadKandy();
  });

  const loadKandy = async () => {
    const result = await axios.get(`http://localhost:8080/kandy/${id}`);
    setKandy(result.data);
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
          <h2 className={"text-center m-4"}>Kandy Branch</h2>

          <div className="card">
            <div className="card-header">
              Details of User id : {user.id}
              <ul className={"list-group list-group-flush"}>
                <li className="list-group-item">
                  <b>Name: </b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>Number: </b>
                  {user.number}
                </li>
                <li className="list-group-item">
                  <b>Description: </b>
                  {user.discripton}
                </li>
                
               
              </ul>

            </div>

          </div>
          <Link className={"btn btn-primary my-2"} to={"/kandy"}>Back to Home</Link>
        </div>

      </div>

    </div>
    </div>
  );
};

export default ViewKandy;