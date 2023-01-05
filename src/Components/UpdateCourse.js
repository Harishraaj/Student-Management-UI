import React from 'react';    
import { Container, Col, Form, FormGroup, Input, Button } from 'reactstrap';   
import axios from 'axios'   
import './AddStudent.css'   
import 'bootstrap/dist/css/bootstrap.min.css';   
import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}
class UpdateCourse extends React.Component {   
  constructor(props) {   
      super(props)        
      this.onChangeCourseName = this.onChangeCourseName.bind(this);   
      this.onChangeCourseCode = this.onChangeCourseCode.bind(this);   
      this.onChangeCourseCredit = this.onChangeCourseCredit.bind(this);           
      this.state = { 
          CourseId:'',  
          CourseName: '',   
          CourseCode: '',   
          CourseCredit: ''                
      }   
  }    

  componentDidMount() {  
    let param = this.props.params;   
    axios.get('https://localhost:44384/api/Course/'+param.courseid)    
    .then(response => {   
      this.setState({  
        CourseId:response.data.CourseId, 
        CourseName: response.data.CourseName,    
        CourseCode: response.data.CourseCode,   
        CourseCredit: response.data.CourseCredit  
          });   
    })   
    .catch(function (error) {   
        console.log(error);   
    })  

  }    

  onChangeCourseName(e) {   
    this.setState({   
        CourseName: e.target.value   
    });   
  }   

  onChangeCourseCode(e) {   
    this.setState({   
        CourseCode: e.target.value   
    });     
  }   

  onChangeCourseCredit(e) {   
    this.setState({   
        CourseCredit: e.target.value   
    });   
  }   

       
  UpdateCourse=()=>{   
    const obj = {
        CourseId:this.state.CourseId, 
        CourseCode: this.state.CourseCode, 
        CourseName: this.state.CourseName, 
        CourseCredit: this.state.CourseCredit 
      };
      axios.put('https://localhost:44384/api/Course/', obj)   
    
    .then(json => {   
      if(json.data!==null && json.status===200)
      {   
        console.log(json.data.Status);   
        alert("Data Save Successfully");   
      }   
      else
      {   
        alert('Data not Saved');   
      }  
    })   
  }   

  render() {   
    return (   
      <Container className="App">   
        <h4>Course Informations</h4>   
        <Form className="form">   
          <Col>   
            <FormGroup row >   
              <Col sm={10}>   
                <Input type="text" name="CourseName" onChange={this.onChangeCourseName} value={this.state.CourseName} placeholder="   CourseName" />   
              </Col>   
            </FormGroup>   
            <FormGroup row>   
              <Col sm={10}>   
                <Input type="text" name="CourseCode" onChange={this.onChangeCourseCode} value={this.state.CourseCode} placeholder="   CourseCode" />   
              </Col>   
            </FormGroup>   
            <FormGroup row>   
              <Col sm={10}>   
                <Input type="number" name="CourseCredit" onChange={this.onChangeCourseCredit} value={this.state.CourseCredit} placeholder="   CourseCredit" />   
              </Col>   
            </FormGroup>    
          </Col>   
          <Col>   
            <FormGroup row>   
              <Col sm={5}>   
              </Col>   
              <Col sm={1}>   
              <button type="button" onClick={this.UpdateCourse} className="btn btn-success">Submit</button>   
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
export default withParams(UpdateCourse);   

 