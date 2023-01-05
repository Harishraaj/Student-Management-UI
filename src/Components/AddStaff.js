import React from 'react';   
import axios from 'axios';   
import './AddStudent.css';   
import { Container, Col, Form, FormGroup, Input, Button } from 'reactstrap';   
class AddStaff extends React.Component{   
  constructor(props)
  {   
    super(props)   
    this.state = {   
      StudentName:'', 
      PhoneNo:'',
      Dob:'',
      Address:'',   
      City:''  ,
      State:'' 
    }   
  }    

  AddStaff=()=>{   
    axios.post('https://localhost:44384/api/Staff/', {StaffName:this.state.StaffName, PhoneNo:this.state.PhoneNo, Doj:this.state.Doj, Address:this.state.Address,   
    City:this.state.City, State:this.state.State})   

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
        <h4>Staff Informations</h4>   
        <Form className="form">   
          <Col>   
          <div className="inputField">
          <FormGroup row>   
              <Col sm={10}>   
                <Input type="text" name="StaffName" onChange={this.handleChange} value={this.state.StaffName} placeholder="   Name" />   
              </Col>   
            </FormGroup>   
            <FormGroup row>   
              <Col sm={10}>   
                <Input type="number" name="PhoneNo" onChange={this.handleChange} value={this.state.PhoneNo} placeholder="   Phone no" />   
              </Col>   
            </FormGroup> 
            <FormGroup row>   
              <Col sm={10}>   
                <Input type="datetime-local" name="Doj" onChange={this.handleChange} value={this.state.Doj} placeholder="   Dob" />   
              </Col>   
            </FormGroup> 
            <FormGroup row>   
              <Col sm={10}>   
                <Input type="text" name="Address" onChange={this.handleChange} value={this.state.Address} placeholder="   Address" />   
              </Col>   
            </FormGroup>   
            <FormGroup row>   
              <Col sm={10}>   
                <Input type="text" name="City" onChange={this.handleChange} value={this.state.City} placeholder="   City" />   
              </Col>   
            </FormGroup>    
            <FormGroup row>   
              <Col sm={10}>   
                <Input type="text" name="State" onChange={this.handleChange} value={this.state.State} placeholder="   Enter State" />   
              </Col>   
            </FormGroup>
          </div>
          </Col>   
          <Col>   
            <FormGroup row>   
              <Col sm={5}>   
              </Col>   
              <Col sm={1}>   
              <button type="button" onClick={this.AddStaff} className="btn btn-success">Submit</button>   
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
export default AddStaff;   

 