import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import swal from 'sweetalert';

const EditDriver = () => {
    let navigate = useNavigate();

    // we want to access the parameters of the current route
    const {id} =useParams()

    const [driver, setDriver] = useState({
        name: "",
        nic:"",
        phone:"",
        email: "",
    });

    const { name,nic,phone, email } = driver;

    const onInputChange = (e) => {
        //spread operator (since we are giving only name field)
        //new update will keep on adding
        setDriver({ ...driver, [e.target.name]: e.target.value });
        //check in components
    };

    useEffect(()=>{
        loadDriver()
    },[])


    const onSubmit = async (e) => {
        e.preventDefault();
        //backtick character (template character)
        await axios.put(`http://localhost:8080/driver/${id}`, driver);
        swal({
            title: "Update Success",
            text: "You clicked the button!",
            icon: "success",
            button: "Ok",
          });
        navigate("/driver");
    };


    // Added Part in Edit
    const loadDriver  = async () => {
        const result=await axios.get(`http://localhost:8080/driver/${id}`)
        setDriver(result.data)
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
                    <h2 className={"text-center m-4"}>Edit User</h2>

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
                                NIC
                            </label>
                            <input
                                type={"text"}
                                className={"form-control"}
                                placeholder={"Enter your NIC"}
                                name={"nic"}
                                value={nic}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                      
                        <div className={"mb-3"}>
                            <label htmlFor={"phone"} className={"form-label"}>
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

                        <button type={"submit"} className={"btn btn-success"}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default EditDriver;