import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewDKandy = () => {
  const [user, setDKandy] = useState({
    start: "",
    end: "",
    one:"",
    km: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadDKandy();
  });

  const loadDKandy = async () => {
    const result = await axios.get(`http://localhost:8080/dkandy/${id}`);
    setDKandy(result.data);
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
                  <b>Start: </b>
                  {user.start}
                </li>
                <li className="list-group-item">
                  <b>End: </b>
                  {user.end}
                </li>
                <li className="list-group-item">
                  <b>One: </b>
                  {user.one}
                </li>
                <li className="list-group-item">
                  <b>Discription: </b>
                  {user.km}
                </li>
                
               
              </ul>

            </div>

          </div>
          <Link className={"btn btn-primary my-2"} to={"/dkandy"}>Back to Home</Link>
        </div>

      </div>

    </div>
    </div>
  );
};

export default ViewDKandy;