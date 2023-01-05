import React from 'react'
import "./StudentTable.css";
import { useNavigate } from "react-router-dom";
function AddStaffButton()
{
    const navigate = useNavigate();
    const Add = () => {
       navigate('AddStaff');
    }
    return(
        <button className='Addbutton' onClick={Add}>+Add</button>
    );
}
export default AddStaffButton;