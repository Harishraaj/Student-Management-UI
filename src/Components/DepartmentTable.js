import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';  
import './StudentTable.css';
class DepartmentTable extends Component {  
  constructor(props) 
  {  
    super(props);  
  }  
      
  DeleteDepartment= () =>{  
    axios.delete('https://localhost:44384/api/Department/'+this.props.obj.DepartmentId)  
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
            {this.props.obj.DepartmentId}  
          </td>  
          <td>  
            {this.props.obj.DepartmentName}  
          </td>  
          <td>  
          <Link to={"/Departmentlist/UpdateDepartment/"+this.props.obj.DepartmentId} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteDepartment} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
export default DepartmentTable;  