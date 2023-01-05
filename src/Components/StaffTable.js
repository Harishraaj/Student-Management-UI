import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';  
import './StudentTable.css';
class StaffTable extends Component {  
  constructor(props)
  {  
  super(props);   
  }  
   
  DeleteStaff= () =>{  
    axios.delete('https://localhost:44384/api/Staff/'+this.props.obj.StaffId)  
    .then(json => {  
      if(json.data.Status==='Delete')
      {  
        alert('Record deleted successfully!!');  
      }  
    })  
  } 
  render() {  
    return (  
        <tr className="table">  
          <td>  
            {this.props.obj.StaffId}  
          </td>
          <td>  
            {this.props.obj.StaffName}  
          </td>
          <td>  
            {this.props.obj.PhoneNo}  
          </td> 
          <td>  
            {this.props.obj.Doj}  
          </td> 
          <td>  
            {this.props.obj.Address}  
          </td> 
          <td>  
            {this.props.obj.City}  
          </td> 
          <td>  
            {this.props.obj.State}  
          </td>  
          <td>  
          <Link to={"/Stafflist/UpdateStaff/"+this.props.obj.StaffId} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteStaff} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default StaffTable;  