import React from 'react';    
import { Container, Col, Form, FormGroup, Input, Button } from 'reactstrap';   
import axios from 'axios'   
import './AddStudent.css'   
import 'bootstrap/dist/css/bootstrap.min.css';   
import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}
class UpdateStudent extends React.Component {   
    constructor(props) {   
        super(props)          
        this.onChangeStudentName = this.onChangeStudentName.bind(this);   
        this.onChangePhoneNo= this.onChangePhoneNo.bind(this);
        this.onChangeDob= this.onChangeDob.bind(this);   
        this.onChangeAddress = this.onChangeAddress.bind(this);  
        this.onChangeCity = this.onChangeCity.bind(this);         
        this.onChangeState = this.onChangeState.bind(this);
        this.state = { 
          StudentId:'',
          StudentName:'',  
          Dob:'',  
          Address:'',  
          PhoneNo: '',   
          State: ''              
        }   
  }    
  componentDidMount() {  
    let param = this.props.params;   
    axios.get('https://localhost:44384/api/Student/'+param.studentid)    
    .then(response => {   
        this.setState({   
          StudentId: response.data.StudentId, 
          StudentName: response.data.StudentName,
          PhoneNo: response.data.PhoneNo,
          Dob:response.data.Dob, 
          Address: response.data.Address,   
          City: response.data.City,   
          State: response.data.State 
        });   
    })   
    .catch(function (error) {   
        console.log(error);   
    })  
  }    
  onChangeStudentName(e) {   
      this.setState({   
          StudentName: e.target.value   
      });   
  
    }   
  onChangePhoneNo(e) {   
    this.setState({   
        PhoneNo: e.target.value   
    });   

  }  
  onChangeDob(e) {   
    this.setState({   
        Dob: e.target.value   
    });     

  }   
  onChangeAddress(e) {   
    this.setState({   
        Address: e.target.value   
    });     

  }   
  onChangeCity(e) {   
    this.setState({   
        City: e.target.value   
    });     

  }   
  onChangeState(e) {   
    this.setState({   
        State: e.target.value   
    });   
  }   
  UpdateStudent=()=>{   
    const obj = {
      StudentId: this.state.StudentId, 
      StudentName: this.state.StudentName, 
      PhoneNo: this.state.PhoneNo, 
      Dob: this.state.Dob, 
      Address: this.state.Address, 
      City:this.state.City, 
      State: this.state.State 
      };
      axios.put('https://localhost:44384/api/Student/', obj)   
    
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
          <h4>Student Informations</h4>   
          <Form className="form">   
            <Col>   
              <FormGroup row>   
                <Col sm={10}>   
                  <Input type="text" name="StudentName" onChange={this.onChangeStudentName} value={this.state.StudentName} placeholder="   Name" />   
                </Col>   
              </FormGroup>   
              <FormGroup row>   
                <Col sm={10}>   
                  <Input type="number" name="PhoneNo" onChange={this.onChangePhoneNo} value={this.state.PhoneNo} placeholder="   Phone no" />   
                </Col>   
              </FormGroup> 
              <FormGroup row>   
                <Col sm={10}>   
                  <Input type="datetime-local" name="Dob" onChange={this.onChangeDob} value={this.state.Dob} placeholder="   Dob" />   
                </Col>   
              </FormGroup> 
              <FormGroup row>   
                <Col sm={10}>   
                  <Input type="text" name="Address" onChange={this.onChangeAddress} value={this.state.Address} placeholder="   Address" />   
                </Col>   
              </FormGroup>   
              <FormGroup row>   
                <Col sm={10}>   
                  <Input type="text" name="City" onChange={this.onChangeCity} value={this.state.City} placeholder="   City" />   
                </Col>   
              </FormGroup>    
              <FormGroup row>   
                <Col sm={10}>   
                  <Input type="text" name="State" onChange={this.onChangeState} value={this.state.State} placeholder="   Enter State" />   
                </Col>   
              </FormGroup>
            </Col>   
            <Col>   
              <FormGroup row>   
                <Col sm={5}>   
                </Col>   
                <Col sm={1}>   
                <button type="button" onClick={this.UpdateStudent} className="btn btn-success">Submit</button>   
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
export default withParams(UpdateStudent);   

 