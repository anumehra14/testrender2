import React,{useState} from 'react'
import axios from 'axios';

import './AddCourse.css';
const AddCourse = () => {
const[course,setCourse]=useState({     cid:"",      cname:"",     duration:"",     startDate:"",    endDate:""});

const handleChange =(e) =>{
    const {name,value}=e.target;
    setCourse({...course,[name]:value
    })
};

const handleSubmit =(e)=>{

    e.preventDefault();
    axios.post("http://localhost:8080/addcourse",course)
    .then(response=>{
        alert("Course added successfully")
        setCourse({cid:"",cname:"",duration:"",startDate:"",endDate:""})

    })
    .catch(error => {    console.log(error)    })
};

    
return (

<div className="add-course-container">
<h2>Add Course</h2>
<form onSubmit={handleSubmit}>
    <div className="form-group">
 
     <label>CourseId</label>
     <input type="text" name="cid" value={course.cid} onChange={handleChange} required/>

   </div>
   <div className="form-group">
   <label>CourseName</label>
   <input type="text" name="cname" value={course.cname} onChange={handleChange} required/>
   
   </div>

   <div className="form-group">
   <label>Duration</label>
   <input type="text" name="duration" value={course.duration} onChange={handleChange} required/>
   </div>
   <div className="form-group">
   <label>startDate</label>
   <input type="text" name="startDate" value={course.startDate} onChange={handleChange} required/>
   </div>
   <div className="form-group">
   <label>endDate</label>
   <input type="text" name="endDate" value={course.endDate} onChange={handleChange} required/>
   </div>
   <div className="submit-btn">
   <button type="submit">Add Course</button>
   </div>
    
        </form>


</div>
);
};

export default AddCourse;