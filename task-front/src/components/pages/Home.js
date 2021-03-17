import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SubjectList, { studentList } from "./SubjectList";

const Home = () => {
  const [std, setStd] = useState([]);

 useEffect(() => {
   axios.get('http://localhost:8000/api/studentlist')
  .then(function (response) {
    setStd(response.data)
    console.log("response",response.data);
  })
  
 }, [])
  
  std.map(item => {
    axios.post("http://localhost:8000/api/subByStd", item.name).then(res => {
       console.log(" res",res)
     })
  })
 

  return (
    <>
    <div className="container">
      <div className="py-4">
        <h1>List Of Students</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Date Of Birth</th>
              <th scope="col">Subject</th>
        
            </tr>
          </thead>
          <tbody>
            {std.map((item, index) => (
              <tr>
                <th scope="row">#</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.DateOfBirth}</td>
                <td>{item.phone}</td>
             
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      
      <SubjectList/>

    </>
  );
};

export default Home;
