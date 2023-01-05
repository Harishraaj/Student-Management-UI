import React from 'react';    
import { Container, Col, Form, FormGroup, Input, Button } from 'reactstrap';   
import axios from 'axios'   
import './AddStudent.css'   
import 'bootstrap/dist/css/bootstrap.min.css';   
import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}
class UpdateStudentCourse extends React.Component {   
    constructor(props) 
    {   
        super(props)        
        this.onChangeCourseId = this.onChangeCourseId.bind(this);   
        this.onChangeStudentId = this.onChangeStudentId.bind(this);   
        this.onChangeDepartmentId = this.onChangeDepartmentId.bind(this);           
        this.state = { 
            CourseId:'',  
            StudentId: '',   
            DepartmentId:''
        }   
    }    

  componentDidMount() {  
    let param = this.props.params;   
    axios.get('https://localhost:44384/api/Student_X_Course/'+param.studentcourseid)    
    .then(response => {   
        this.setState({  
        StudentCourseId:response.data.StudentCourseId, 
        StudentId:response.data.StudentId,
        CourseId: response.data.CourseId,    
        DepartmentId: response.data.DepartmentId  
        });   
    })   
    .catch(function (error) {   
        console.log(error);   
    })  
  }    
  onChangeStudentId(e) {   
    this.setState({   
        StudentId: e.target.value   
    });   
  }   
  onChangeCourseId(e) {   
    this.setState({   
        CourseId: e.target.value   
    });     
  }   
  onChangeDepartmentId(e) {   
    this.setState({   
        DepartmentId: e.target.value   
    });   
  }   
      
UpdateStudentCourse=()=>{   
  const obj = {
    StudentCourseId:this.state.StudentCourseId, 
    CourseId: this.state.CourseId, 
    StudentId: this.state.StudentId, 
    DepartmentId: this.state.DepartmentId 
    };
    axios.put('https://localhost:44384/api/Student_X_Course/', obj)   
  
  .then(json => {   
    if(json.data!==null && json.status===200)
    {      
        alert("Data Save Successfully");   
    }   
    else{   
        alert('Data not Saved');   
    }  
    })   
  }   

  
  render() {   
    return (   
        <Container className="App">   
            <h4>Student Course Informations</h4>   
            <Form className="form">   
                <Col>   
                <FormGroup row >   
                    
                    <Col sm={10}>   
                    <Input type="number" name="StudentId" onChange={this.onChangeStudentId} value={this.state.StudentId} placeholder="   Student Id" />   
                    </Col>   
                </FormGroup>   

                <FormGroup row>   
                    
                    <Col sm={10}>   
                    <Input type="number" name="CourseId" onChange={this.onChangeCourseId} value={this.state.CourseId} placeholder="   Course Id" />   
                    </Col>   
                </FormGroup>   

                <FormGroup row>   
                    
                    <Col sm={10}>   
                    <Input type="number" name="DepartmentId" onChange={this.onChangeDepartmentId} value={this.state.DepartmentId} placeholder="   Department Id" />   
                    </Col>   
                </FormGroup>    

                </Col>   
                <Col>   
                <FormGroup row>   
                    <Col sm={5}>   
                    </Col>   
                    <Col sm={1}>   
                    <button type="button" onClick={this.UpdateStudentCourse} className="btn btn-success">Submit</button>   
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
export default withParams(UpdateStudentCourse);   

 