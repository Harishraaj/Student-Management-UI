import React from 'react';   
import axios from 'axios';   
import { Container, Col, Form, FormGroup, Input, Button } from 'reactstrap';   
import './Home.css';

class AddDepartment extends React.Component{   
  constructor(props)
  {   
    super(props)   
    this.state = {   
    DepartmentName:'', 
    }   
  }    

  AddDepartment=()=>{   
    axios.post('https://localhost:44384/api/Department/', {DepartmentName:this.state.DepartmentName})   

    .then(json => {   
      if(json.data!==null && json.status===200)
      {     
        alert("Data Save Successfully");   
      }   
      else
      {   
        alert('Data not Saved');   
      }  
    })   
  }   

  handleChange= (e)=> {   
    this.setState({[e.target.name]:e.target.value});   
  }   

  render() {   
    return (   
      <Container className="App">   
        <h4 className="PageHeading">Department Informations</h4>   
        <Form className="form">   
          <Col>   
            <div className='inputField'>
            <FormGroup row>   
                <Col sm={6}>   
                  <Input type="text" name="DepartmentName" onChange={this.handleChange} value={this.state.DepartmentName} placeholder="Department Name" />   
                </Col>   
              </FormGroup> 
            </div>  
          </Col>   
          <Col>   
            <FormGroup row>   
              <Col sm={5}>   
              </Col>   
              <Col sm={1}>   
              <button type="button" onClick={this.AddDepartment} className="btn btn-success">Submit</button>   
              </Col>   
              <Col sm={1}>   
                <Button color="danger">Cancel</Button>{' '}   
              </Col>   
              <Col sm={5}>   
              </Col>   
            </FormGroup>   
          </Col>   
        </Form>   
      </Container>   
    );   
  }   
}    
export default AddDepartment;   

 