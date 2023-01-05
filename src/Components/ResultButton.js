import React from 'react'
import "./Home.css";
import { useNavigate } from "react-router-dom";
function AddStaffButton()
{
    const navigate = useNavigate();
    const Add = () => {
       navigate('Result');
    }
    return(
        <button className='resultButton' onClick={Add}>Result</button>
    );
}
export default AddStaffButton;