import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import swal from 'sweetalert';

const AddDKandy = () => {
 
  let navigate = useNavigate();

  const [dKandy , setDKandy ] = useState({
    start: "",
    end: "",
    one:"",
    km: "",
    
  });

  const { start, end,one, km } = dKandy ;

  const onInputChange = (e) => {
    
    setDKandy({ ...dKandy, [e.target.name]: e.target.value });
  
  };

  const onSubmit = async (e) => {
   
    e.preventDefault();
   
    await axios.post("http://localhost:8080/dkandys", dKandy);
    swal({
      title: "Success",
      text: "You clicked the button!",
      icon: "success",
      button: "Ok",
    });
    navigate("/dkandy");

    
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
          <h2 className={"text-center m-4"}>Place - Branch Kandy</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                Start
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter Start Place"}
                name={"start"}
                value={start}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
               End
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter End Place"}
                name={"end"}
                value={end}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
               Price (1 Km)
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter Price"}
                name={"one"}
                value={one}
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
                name={"km"}
                value={km}
                onChange={(e) => onInputChange(e)}
              />
            </div>


            <button type={"submit"} className={"btn btn-outline-primary"}>
              Submit
            </button>

            <Link className={"btn btn-outline-danger mx-2"} to={"/dkandy"}>Cancel</Link>

          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AddDKandy;