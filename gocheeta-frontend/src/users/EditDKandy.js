import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import swal from 'sweetalert';

const EditDKandy = () => {
    //1.input lai store garnu parxa
    //let's make object
    let navigate = useNavigate();

    // we want to access the parameters of the current route
    const {id} =useParams()

    const [dKandy, setDKandy] = useState({
        start: "",
        end:"",
        one:"",
        km: "",
       
    });

    const { start,end,one, km } = dKandy;

    const onInputChange = (e) => {
        //spread operator (since we are giving only name field)
        //new update will keep on adding
        setDKandy({ ...dKandy, [e.target.name]: e.target.value });
        //check in components
    };

    useEffect(()=>{
        loadDKandy()
    },[])

    const onSubmit = async (e) => {
        e.preventDefault();
        //backtick character (template character)
        await axios.put(`http://localhost:8080/dkandy/${id}`, dKandy);
        swal({
          title: "Update Success",
          text: "You clicked the button!",
          icon: "success",
          button: "Ok",
        });
        navigate("/dkandy");
    };


    // Added Part in Edit
    const loadDKandy  = async () => {
        const result=await axios.get(`http://localhost:8080/dkandy/${id}`)
        setDKandy(result.data)
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
              <h2 className={"text-center m-4"}>Place -Branch Kandy</h2>
    
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
               Price (1 km)
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter End Place"}
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
    
                
              </form>
            </div>
          </div>
        </div>
      
      );
    };
    
    export default EditDKandy;