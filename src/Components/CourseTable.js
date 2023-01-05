import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';  
import './StudentTable.css';
class CourseTable extends Component {  
  
  constructor(props) 
  {  
    super(props);   
  }  
   
  DeleteDepartment= () =>{  
    axios.delete('https://localhost:44384/api/Course/'+this.props.obj.CourseId)  
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
            {this.props.obj.CourseId}  
          </td>
          <td>  
            {this.props.obj.CourseName}  
          </td>
          <td>  
            {this.props.obj.CourseCode}  
          </td>  
          <td>  
            {this.props.obj.CourseCredit}  
          </td>  
          <td>  
          <Link to={"/Course/Courselist/UpdateCourse/"+this.props.obj.CourseId} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteDepartment} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
export default CourseTable;  