import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './StaffCourseTable';  
import AddStaffCourseButton from './AddStaffCourseButton';


export default class StaffCourselist extends Component {  

  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://localhost:44384/api/Staff_X_Course/')  
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  

    render() {  
      return (  
        <div>  
          <h4 align="center">Staff Course List</h4>   
          <AddStaffCourseButton/>
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>StaffCourse Id</th>  
                <th>Staff Id</th> 
                <th>Course Id</th>  
                <th colSpan="0">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
    );  
  }  
}  
