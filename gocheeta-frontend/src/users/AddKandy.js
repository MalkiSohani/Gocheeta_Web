import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import swal from 'sweetalert';

const AddKandy = () => {
 
  let navigate = useNavigate();

  const [kandy , setKandy ] = useState({
    name: "",
    number: "",
    discrption: "",
    
  });

  const { name, number, discription } = kandy ;

  const onInputChange = (e) => {
    
    setKandy({ ...kandy, [e.target.name]: e.target.value });
  
  };

  const onSubmit = async (e) => {
   
    e.preventDefault();
   
    await axios.post("http://localhost:8080/kandys", kandy);
    swal({
      title: "Success",
      text: "You clicked the button!",
      icon: "success",
      button: "Ok",
    });
    navigate("/kandy");

    
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
          <h2 className={"text-center m-4"}>Register Vehical -Branch Kandy</h2>

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
               Number
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter Vehical Number"}
                name={"number"}
                value={number}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                Description
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter Description"}
                name={"discription"}
                value={discription}
                onChange={(e) => onInputChange(e)}
              />
            </div>


            <button type={"submit"} className={"btn btn-outline-primary"}>
              Submit
            </button>

            <Link className={"btn btn-outline-danger mx-2"} to={"/kandy"}>Cancel</Link>

          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AddKandy;