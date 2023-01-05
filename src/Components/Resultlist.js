import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './ResultTable';  
import AddResultButton from './AddResultButton';


export default class Resultlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://localhost:44384/api/Result/')  
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
          <h4 align="center">Result</h4>   
          <AddResultButton/>
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Result Id</th>  
                <th>Student Id</th>  
                <th>Course Id</th>
                <th>Mark</th>
                <th>Status</th>
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
