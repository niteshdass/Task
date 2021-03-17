import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SubjectList = () => {
  const [std, setStd] = useState([]);

 useEffect(() => {
   axios.get('http://localhost:8000/api/subjectList')
  .then(function (response) {
    setStd(response.data)
    console.log("response",response.data);
  })
  
  }, [])

  const deleteSubject = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
 
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>List Of Subjects</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subject</th>
              <th scope="col">STudent</th>
             
            </tr>
          </thead>
          <tbody>
            {std.map((item, index) => (
              <tr>
                <th scope="row">#</th>
                <td>{item.name}</td>

                <td>{item.student.map( st => <>{st} , </>)}</td>
            
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubjectList;
