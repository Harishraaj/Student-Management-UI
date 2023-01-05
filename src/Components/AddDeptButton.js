import React from 'react'
import "./StudentTable.css";
import { useNavigate } from "react-router-dom";
function Addbutton()
{
    const navigate = useNavigate();
    const Add = () => {
       navigate('AddDepartment');
    }
    return(
        <button className='Addbutton' onClick={Add}>+Add</button>
    );
}
export default Addbutton;