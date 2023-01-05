import React from 'react';    
import { Container, Col, Form, FormGroup, Input, Button } from 'reactstrap';   
import axios from 'axios'   
import './AddStudent.css'   
import 'bootstrap/dist/css/bootstrap.min.css';   
import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}
class UpdateDepartment extends React.Component {   
    constructor(props) {   
      super(props)        
      this.onChangeDepartmentName = this.onChangeDepartmentName.bind(this);   
      this.state = { 
        DepartmentId:'',  
        DepartmentName: ''          
    }   
  }    

  componentDidMount() {  
    let param = this.props.params;   
    axios.get('https://localhost:44384/api/Department/'+param.departmentid)    
    .then(response => {   
      this.setState({  
        DepartmentId:response.data.DepartmentId, 
        DepartmentName: response.data.DepartmentName,     
      });   
    })   
    .catch(function (error) {   
        console.log(error);   
    })  
  }    

  onChangeDepartmentName(e) {   
    this.setState({   
      DepartmentName: e.target.value   
    });   
  }   
  
  UpdateDepartment=()=>{   
    const obj = {
      DepartmentId:this.state.DepartmentId,  
      DepartmentName: this.state.DepartmentName
      };
      axios.put('https://localhost:44384/api/Department/', obj)   
    
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
        <h4>Department Informations</h4>   
        <Form className="form">   
          <Col>   
            <FormGroup row >   
              <Col sm={10}>   
                <Input type="text" name="DepartmentName" onChange={this.onChangeDepartmentName} value={this.state.DepartmentName} placeholder="   DepartmentName" />   
              </Col>   
            </FormGroup>    
          </Col>   
          <Col>   
            <FormGroup row>   
              <Col sm={5}>   
              </Col>   
              <Col sm={1}>   
              <button type="button" onClick={this.UpdateDepartment} className="btn btn-success">Submit</button>   
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
export default withParams(UpdateDepartment);   

 