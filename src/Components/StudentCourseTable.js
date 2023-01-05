import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';  
import './StudentTable.css';
class StudentCourseTable extends Component {  
  constructor(props) {  
    super(props);  
    }  
   
    DeleteDepartment= () =>{  
     axios.delete('https://localhost:44384/api/Student_X_Course/'+this.props.obj.StudentCourseId)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Record deleted successfully!!');  
    }  
    })  
    } 
  render() {  
    return (  
        <tr className="table">  
          <td>  
            {this.props.obj.StudentCourseId}  
          </td>
          <td>  
            {this.props.obj.CourseId}  
          </td>
          <td>  
            {this.props.obj.StudentId}  
          </td>
          <td>  
            {this.props.obj.DepartmentId}  
          </td>    
          <td>  
          <Link to={"/Course/StudentCourselist/UpdateStudentCourse/"+this.props.obj.StudentCourseId} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteDepartment} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default StudentCourseTable;  