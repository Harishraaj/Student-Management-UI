import React from 'react';   
import axios from 'axios';   
import './AddStudent.css';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';   

class AddStudentCourse extends React.Component{   
  constructor(props){   
  super(props)   
    this.state = {  
      CourseId:'',
      StudentId:'',
      DepartmentId:'' 
    }   
  }    

  AddCourse=()=>{   
    axios.post('https://localhost:44384/api/Student_X_Course/', { CourseId:this.state.CourseId ,  
    StudentId:this.state.StudentId, DepartmentId:this.state.DepartmentId})   

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
        <h4>Student Course Informations</h4>   
        <Form className="form">   
          <Col>   
          <div className='inputField'>
            <FormGroup row>   
                <Col sm={6}>   
                  <Input type="number" name="CourseId" onChange={this.handleChange} value={this.state.CourseId} placeholder="   Course Id" />   
                </Col>   
              </FormGroup> 
              <FormGroup row>   
                <Col sm={6}>   
                  <Input type="number" name="StudentId" onChange={this.handleChange} value={this.state.StudentId} placeholder="   Student Id" />   
                </Col>   
              </FormGroup>   
              <FormGroup row>   
                <Col sm={6}>   
                  <Input type="number" name="DepartmentId" onChange={this.handleChange} value={this.state.DepartmentId} placeholder="   DepartmentId" />   
                </Col>   
              </FormGroup> 
          </div>
          </Col>   
          <Col>   
            <FormGroup row>   
              <Col sm={5}>   
              </Col>   
              <Col sm={1}>   
              <button type="button" onClick={this.AddCourse} className="btn btn-success">Submit</button>   
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
export default AddStudentCourse;   

 