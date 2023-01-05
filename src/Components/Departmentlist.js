import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './DepartmentTable';  
import AddDeptButton from './AddDeptButton';

export default class Departmentlist extends Component {  

  constructor(props) 
  {  
    super(props);  
    this.state = {business: []};  
  }  
  componentDidMount(){  
    axios.get('https://localhost:44384/api/Department/')  
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
        <h4 align="center">Department List</h4>   
        <AddDeptButton/>
        <table className="table table-striped" style={{ marginTop: 10 }}>  
          <thead>  
            <tr>  
              <th>DepartmentId</th>  
              <th>DepartmentName</th>  
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
