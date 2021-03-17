import React,{useState,useEffect} from "react";
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useHistory } from "react-router-dom";
const Contact = () => {
  const [name, setName] = useState("")
  const [student, setStudent] = useState()
const [std,setStd] = useState([])
 
const user = {name,student}
  console.log(student, name,std)
  useEffect(() => {
   axios.get('http://localhost:8000/api/studentlist')
  .then(function (response) {
    setStd(response.data)
    console.log("response",response.data);
  })
  
  }, [])


  console.log("std ", std);

  const onInputChange = (e) => {
    setName(e.target.value)
  }
    const onInputChange1 = (e) => {
    setStudent(e.target.value)
  }

  const onSubmit = async e => {
    e.preventDefault()
    if (name) {
      e.preventDefault();
      await axios.post("http://localhost:8000/api/subject",user)
      toast.success("Subject Add Successfully !!")
      setName("")
      setStudent("")
    
    } else {
      toast.error("All field are required !!")
    }
  };

  return (
      <div className="container">
      <ToastContainer/>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Subject</h2>
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
            <select class="form-control" onChange={ e => onInputChange1(e)}>
              <option value="1">Default </option>
              {
                std.map(item => (
                  <option value={item.name}> {item.name}</option>
                ))
              }
              
            
            </select>
          </div>
          
          <button className="btn btn-primary btn-block">Add Subject</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
