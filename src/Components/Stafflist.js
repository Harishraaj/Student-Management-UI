import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './StaffTable';  
import AddStaffButton from './AddStaffButton';

export default class Stafflist extends Component {  

  constructor(props) 
  {  
    super(props);  
    this.state = {business: []};  
  }  
  componentDidMount(){   
    axios.get('https://localhost:44384/api/Staff/')  
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
        <h4 align="center">Staff List</h4>   
        <AddStaffButton/>
        <table className="table table-striped" style={{ marginTop: 10 }}>  
          <thead>  
            <tr>  
              <th>Staff Id</th>  
              <th>Staff Name</th> 
              <th>PhoneNo</th> 
              <th>Doj</th>  
              <th>Address</th>  
              <th>City</th>  
              <th>State</th>  
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
