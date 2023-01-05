import React from 'react'
import "./StudentTable.css";
import { useNavigate } from "react-router-dom";
function AddStaffCourseButton()
{
    const navigate = useNavigate();
    const Add = () => {
       navigate('AddStaffCourse');
    }
    return(
        <button className='Addbutton' onClick={Add}>+Add</button>
    );
}
export default AddStaffCourseButton;