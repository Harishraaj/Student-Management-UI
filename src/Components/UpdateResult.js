import React from 'react';    
import { Container, Col, Form, FormGroup, Input, Button } from 'reactstrap';   
import axios from 'axios'   
import './AddStudent.css'   
import 'bootstrap/dist/css/bootstrap.min.css';   
import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}
class UpdateResult extends React.Component {   
    constructor(props) {   
    super(props)   
    this.onChangeStudentId = this.onChangeStudentId.bind(this);        
    this.onChangeCourseId = this.onChangeCourseId.bind(this);   
    this.onChangeMark= this.onChangeMark.bind(this);   
    this.onChangeStatus = this.onChangeStatus.bind(this);           
    this.state = { 
      StudentId:'',
      CourseId:'',  
      Mark: '',   
      Status: ''              
    }   
  }    
  componentDidMount() {  
    let param = this.props.params;   
    axios.get('https://localhost:44384/api/Result/'+param.resultid)    
    .then(response => {   
        this.setState({  
          ResultId: response.data.ResultId, 
          StudentId: response.data.StudentId,   
          CourseId:response.data.CourseId,  
          Mark: response.data.Mark,   
          Status: response.data.Status  
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

  onChangeMark(e) {   
    this.setState({   
        Mark: e.target.value   
    });     
  }   

  onChangeStatus(e) {   
    this.setState({   
        Status: e.target.value   
    });   
  }   

       
  UpdateResult=()=>{   
    const obj = {
      ResultId: this.state.ResultId, 
      StudentId: this.state.StudentId, 
      CourseId:this.state.CourseId, 
      Mark: this.state.Mark, 
      Status: this.state.Status 
      };
      axios.put('https://localhost:44384/api/Result/', obj)   
    
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

  render() {   
    return (   
    <Container className="App">   
      <h4>Result Informations</h4>   
      <Form className="form">   
        <Col>   
          <FormGroup row>   
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
              <Input type="number" name="Mark" onChange={this.onChangeMark} value={this.state.Mark} placeholder="   Mark" />   
            </Col>   
          </FormGroup> 
          <FormGroup row>   
            <Col sm={10}>   
              <Input type="text" name="Status" onChange={this.onChangeStatus} value={this.state.Status} placeholder="   Status" />   
            </Col>   
          </FormGroup>   
          </Col>   
          <Col>   
            <FormGroup row>   
              <Col sm={5}>   
              </Col>   
              <Col sm={1}>   
              <button type="button" onClick={this.UpdateResult} className="btn btn-success">Submit</button>   
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
export default withParams(UpdateResult);   

 