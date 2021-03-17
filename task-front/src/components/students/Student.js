import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const Student = () => {
  let history = useHistory();
  const [student, setStudent] = useState({
    name: "",
    email: "",  
    phone: "",
    DateOfBirth: ""
  });

  const { name, email, phone, DateOfBirth } = student;
  console.log(name, email, phone, DateOfBirth)


  const onInputChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault()
    if (name, email, phone, DateOfBirth) {
      e.preventDefault();
      await axios.post("http://localhost:8000/api/student", student)
      history.push('/')
    
    } else {
      toast.error("All field are required !!")
    }
  };
  return (
    <div className="container">
      <ToastContainer/>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Student</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your Date of Birth"
              name="DateOfBirth"
              value={DateOfBirth}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Student</button>
        </form>
      </div>
    </div>
  );
};

export default Student;
