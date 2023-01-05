import React from 'react';    
import { Container, Col, Form, FormGroup, Input, Button } from 'reactstrap';   
import axios from 'axios'   
import './AddStudent.css'   
import 'bootstrap/dist/css/bootstrap.min.css';   
import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}
class UpdateStaffCourse extends React.Component {   
  constructor(props) {   
  super(props)        
  this.onChangeCourseId = this.onChangeCourseId.bind(this);   
  this.onChangeStaffId = this.onChangeStaffId.bind(this);              
        this.state = { 
          CourseId:'',  
          StaffId: ''
      }   
  }    

  componentDidMount() {  
    let param = this.props.params;   
    axios.get('https://localhost:44384/api/Staff_X_Course/'+param.staffcourseid)    
    .then(response => {   
      this.setState({  
        StaffCourseId:response.data.StaffCourseId, 
        StaffId:response.data.StaffId,
        CourseId: response.data.CourseId,    
        });   
    })   
    .catch(function (error) {   
        console.log(error);   
    }) 
  }    
  onChangeStaffId(e) {   
    this.setState({   
        StaffId: e.target.value   
    });   

  }   
  onChangeCourseId(e) {   
    this.setState({   
        CourseId: e.target.value   
    });     

  }   
        
  UpdateStaffCourse=()=>{   
    const obj = {
      StaffCourseId:this.state.StaffCourseId, 
      StaffId: this.state.StaffId, 
      CourseId: this.state.CourseId
      };
      axios.put('https://localhost:44384/api/Staff_X_Course/', obj)   
    
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

  render() 
  {   
    return (   
      <Container className="App">   
        <h4>Staff Course Informations</h4>   
        <Form className="form">   
          <Col>   
            <FormGroup row >   
              <Col sm={10}>   
                <Input type="number" name="StaffId" onChange={this.onChangeStaffId} value={this.state.StaffId} placeholder="   Staff Id" />   
              </Col>   
            </FormGroup>   
            <FormGroup row>   
              <Col sm={10}>   
                <Input type="number" name="CourseId" onChange={this.onChangeCourseId} value={this.state.CourseId} placeholder="   Course Id" />   
              </Col>   
            </FormGroup>   
          </Col>   
          <Col>   
            <FormGroup row>   
              <Col sm={5}>   
              </Col>   
              <Col sm={1}>   
              <button type="button" onClick={this.UpdateStaffCourse} className="btn btn-success">Submit</button>   
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
   
export default withParams(UpdateStaffCourse);   

 