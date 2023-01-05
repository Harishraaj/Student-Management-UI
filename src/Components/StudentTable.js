import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';  
import './StudentTable.css';
class StudentTable extends Component {  
  constructor(props) 
  {  
    super(props);  
  }  
      
  DeleteStudent= () =>{  
    axios.delete('https://localhost:44384/api/Student/'+this.props.obj.StudentId)  
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
            {this.props.obj.StudentId}  
          </td>  
          <td>  
            {this.props.obj.StudentName}  
          </td>  
          <td>  
            {this.props.obj.PhoneNo}  
          </td>  
          <td>  
            {this.props.obj.Dob}  
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
          <Link to={"/Studentlist/UpdateStudent/"+this.props.obj.StudentId} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteStudent} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default StudentTable;  