import React from 'react'
import "./StudentTable.css";
import { useNavigate } from "react-router-dom";
function AddCourseButton()
{
    const navigate = useNavigate();
    const Add = () => {
       navigate('AddStudentCourse');
    }
    return(
        <button className='Addbutton' onClick={Add}>+Add</button>
    );
}
export default AddCourseButton;