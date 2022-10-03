import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import swal from 'sweetalert';

const EditKandy = () => {
    //1.input lai store garnu parxa
    //let's make object
    let navigate = useNavigate();

    // we want to access the parameters of the current route
    const {id} =useParams()

    const [kandy, setKandy] = useState({
        name: "",
        number:"",
        discrption: "",
       
    });

    const { name,number, discription } = kandy;

    const onInputChange = (e) => {
        //spread operator (since we are giving only name field)
        //new update will keep on adding
        setKandy({ ...kandy, [e.target.name]: e.target.value });
        //check in components
    };

    useEffect(()=>{
        loadKandy()
    },[])

    const onSubmit = async (e) => {
        e.preventDefault();
        //backtick character (template character)
        await axios.put(`http://localhost:8080/kandy/${id}`, kandy);
        swal({
          title: "Update Success",
          text: "You clicked the button!",
          icon: "success",
          button: "Ok",
        });
        navigate("/kandy");
    };


    // Added Part in Edit
    const loadKandy  = async () => {
        const result=await axios.get(`http://localhost:8080/kandy/${id}`)
        setKandy(result.data)
    }
    return (

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
                    placeholder={"Enter Vehical name"}
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
    
                
              </form>
            </div>
          </div>
        </div>
      
      );
    };
    
    export default EditKandy;