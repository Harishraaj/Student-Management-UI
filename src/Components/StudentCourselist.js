import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './StudentCourseTable';  
import AddStudentCourseButton from './AddStudentCourseButton';
import './Home.css';
import ResultButton from './ResultButton';

export default class StudentCourselist extends Component {  

  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      axios.get('https://localhost:44384/api/Student_X_Course/')  
        .then(response => {  
          this.setState({ business: response.data });  
  
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
        <h4 align="center">Student Course List</h4>   
        <AddStudentCourseButton/>
        <ResultButton/>
        <table className="table table-striped" style={{ marginTop: 10 }}>  
          <thead>  
            <tr>  
              <th>StudentCourse Id</th>  
              <th>Course Id</th> 
              <th>Student Id</th> 
              <th>Department Id</th>  
              <th colSpan="2">Action</th>  
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
