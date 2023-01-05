import React from 'react'
import "./StudentTable.css";
import { useNavigate } from "react-router-dom";
function AddResultButton()
{
    const navigate = useNavigate();
    const Add = () => {
       navigate('AddResult');
    }
    return(
        <button className='Addbutton' onClick={Add}>+Add</button>
    );
}
export default AddResultButton;