import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';  
import './StudentTable.css';
class StaffCourseTable extends Component {  

  constructor(props) 
  {  
    super(props);  
  }  
   
  DeleteStaff= () =>{  
    axios.delete('https://localhost:44384/api/Staff_X_Course/'+this.props.obj.StaffId)  
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
            {this.props.obj.StaffCourseId}  
          </td>
          <td>  
            {this.props.obj.StaffId}  
          </td>
          <td>  
            {this.props.obj.CourseId}  
          </td>  
          <td>  
          <Link to={"/Course/StaffCourselist/UpdateStaffCourse/"+this.props.obj.CourseId} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteStaff} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default StaffCourseTable;  