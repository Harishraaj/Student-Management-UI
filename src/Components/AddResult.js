import React from 'react';   
import axios from 'axios';   
import './AddStudent.css';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';   
class AddResult extends React.Component{   
  constructor(props)
  {   
    super(props)   
    this.state = {  
      StudentId:'', 
      CourseId:'',
      Mark:'',
      Status:'' 
    }   
  }    

  AddResult=()=>{   
    axios.post('https://localhost:44384/api/Result/', { StudentId:this.state.StudentId, CourseId:this.state.CourseId ,  
    Mark:this.state.Mark, Status:this.state.Status})   

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
        <h4>Result Informations</h4>   
        <Form className="form">   
          <Col>   
          <div className="inputField">
          <FormGroup row>   
              <Col sm={10}>   
                <Input type="number" name="StudentId" onChange={this.handleChange} value={this.state.StudentId} placeholder="   Student Id" />   
              </Col>   
            </FormGroup>   
            <FormGroup row>   
              <Col sm={10}>   
                <Input type="number" name="CourseId" onChange={this.handleChange} value={this.state.CourseId} placeholder="   Course Id" />   
              </Col>   
            </FormGroup> 
            <FormGroup row>   
              <Col sm={10}>   
                <Input type="number" name="Mark" onChange={this.handleChange} value={this.state.Mark} placeholder="   Mark" />   
              </Col>   
            </FormGroup> 
            <FormGroup row>   
              <Col sm={10}>   
                <Input type="text" name="Status" onChange={this.handleChange} value={this.state.Status} placeholder="   Status" />   
              </Col>   
            </FormGroup>   
          </div>
          </Col>   
          <Col>   
            <FormGroup row>   
              <Col sm={5}>   
              </Col>   
              <Col sm={1}>   
              <button type="button" onClick={this.AddResult} className="btn btn-success">Submit</button>   
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
export default AddResult;   

 