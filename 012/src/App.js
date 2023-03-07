import { useState } from "react";
import React from "react";
import './App.css';
function App() {
  
  const [courses,setCourse] = useState([
      {id:54321,name:'Learning Python for Data Analysis and Visualization Ver 1',price:499},
      {id:65124,name:'UML and Object-Oriented Design Foundations',price:499},
      {id:80761,name:'The Complete JavaScript Course 2023: From Zero to Expert!',price:499}
  ]);

  const[show,setShow] = useState(true)


  function handleDelete(id){

      setCourse(courses.filter((course)=>course.id !==id));
  }
return (
  <div className="App">
    <h1>Course List</h1>
    <ul>
      <button onClick={()=>setShow(!show)}className='trigger'>Toggle</button>
      {show && courses.map((course)=>(
          
          <li key = {course.id}>
              <span>{course.id} - {course.name} - {course.price}</span>
              <button onClick={()=>handleDelete(course.id)} className='delete'>Delete</button>
          </li>
      ))}
    </ul>
  </div>
);
}

export default App;