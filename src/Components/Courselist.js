import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './CourseTable';  
import AddCourseButton from './AddCourseButton';

export default class Courselist extends Component {  

  constructor(props) 
  {  
    super(props);  
    this.state = {business: []};  
  }  

  componentDidMount(){    
    axios.get('https://localhost:44384/api/Course/')  
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
        <h4 align="center">Course List</h4>   
        <AddCourseButton/>
        <table className="table table-striped" style={{ marginTop: 10 }}>  
          <thead>  
            <tr>  
              <th>CourseId</th>  
              <th>Course Name</th> 
              <th>Course Code</th> 
              <th>Course Credit</th>  
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
