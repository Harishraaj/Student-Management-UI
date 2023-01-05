import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';  
import './StudentTable.css';
class ResultTable extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeleteDepartment= () =>{  
     axios.delete('https://localhost:44384/api/Result/'+this.props.obj.ResultId)  
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
            {this.props.obj.ResultId}  
          </td>
          <td>  
            {this.props.obj.StudentId}  
          </td>
          <td>  
            {this.props.obj.CourseId}  
          </td>  
          <td>  
            {this.props.obj.Mark}  
          </td>  
          <td>  
            {this.props.obj.Status}  
          </td>  
          
          <td>  
          <Link to={"/Resultlist/UpdateResult/"+this.props.obj.ResultId} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteDepartment} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default ResultTable;  