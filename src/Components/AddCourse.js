import React from 'react';   
import axios from 'axios';   
import './AddStudent.css';   
import { Container, Col, Form, FormGroup, Input, Button } from 'reactstrap';   
import'./Home.css';

class AddCourse extends React.Component{   
  constructor(props)
  {   
    super(props)   
      this.state = {   
      CourseName:'', 
      CourseCode:'',   
      CourseCredit:'' 
    }   
  }    

  AddCourse=()=>{   
    axios.post('https://localhost:44384/api/Course/', {CourseName:this.state.CourseName, CourseCode:this.state.CourseCode,   
    CourseCredit:this.state.CourseCredit})   

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
        <h4>Course Informations</h4>   
        <Form className="form">   
          <Col>   
            <div className='inputField'>
            <FormGroup row>   
                <Col sm={6}>   
                  <Input type="text" name="CourseName" onChange={this.handleChange} value={this.state.CourseName} placeholder="   CourseName" />   
                </Col>   
              </FormGroup>   
              <FormGroup row>   
                <Col sm={6}>   
                  <Input type="text" name="CourseCode" onChange={this.handleChange} value={this.state.CourseCode} placeholder="   CourseCode" />   
                </Col>   
              </FormGroup>  
              <FormGroup row>   
                <Col sm={6}>   
                  <Input type="number" name="CourseCredit" onChange={this.handleChange} value={this.state.CourseCredit} placeholder="   CourseCredit" />   
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
export default AddCourse;   

 