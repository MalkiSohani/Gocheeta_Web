import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import swal from 'sweetalert';

const AddBKandy = () => {
 
  let navigate = useNavigate();

  const [bKandy, setBKandy] = useState({
    id: "",
    name: "",
    phone: "",
    distance: "",
    dateCreated: "",
    time:""
  });

  const { id,name, phone, distance,dateCreated,time  } = bKandy;

  const onInputChange = (e) => {
    
    setBKandy({ ...bKandy, [e.target.name]: e.target.value });
  
  };

  const onSubmit = async (e) => {
    e.preventDefault();
   
    await axios.post("http://localhost:8080/bookings", bKandy);
    swal({
      title: "Success",
      text: "You clicked the button!",
      icon: "success",
      button: "Ok",
    });
    navigate("/fkandy");
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
        {/*col-md-6 : colums of medium size with 6 span */}
        <div
          className={
            "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
          }
        >
          <h2 className={"text-center m-4"}>Booking From</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                ID
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter your ID"}
                name={"id"}
                value={id}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                Name
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter your name"}
                name={"name"}
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                Phone
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter your Mobile Number"}
                name={"phone"}
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                Distance
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter Distance"}
                name={"distance"}
                value={distance}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                Date
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter Date"}
                name={"dateCreated"}
                value={dateCreated}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                Time
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter Time"}
                name={"time"}
                value={time}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type={"submit"} className={"btn btn-outline-primary"}>
              Submit
            </button>

            <Link className={"btn btn-outline-danger mx-2"} to={"/fkandy"}>Cancel</Link>

          </form>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default AddBKandy;