import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import swal from 'sweetalert';

const AddUser = () => {
 
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    username: "",
    email: "",
  });

  const { name, phone, username, email } = user;

  const onInputChange = (e) => {
    
    setUser({ ...user, [e.target.name]: e.target.value });
  
  };

  const onSubmit = async (e) => {
    e.preventDefault();
   
    await axios.post("http://localhost:8080/users", user);
    swal({
      title: "Success",
      text: "You clicked the button!",
      icon: "success",
      button: "Ok",
    });
    navigate("/user");
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
          <h2 className={"text-center m-4"}>Register Custormer</h2>

          <form onSubmit={(e) => onSubmit(e)}>
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
                UserName
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter your username"}
                name={"username"}
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                Email
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter your email"}
                name={"email"}
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type={"submit"} className={"btn btn-outline-primary"}>
              Submit
            </button>

            <Link className={"btn btn-outline-danger mx-2"} to={"/user"}>Cancel</Link>

          </form>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default AddUser;