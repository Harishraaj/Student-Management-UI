import React, { Component } from 'react';  
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Form, FormGroup, Input, Button} from 'reactstrap';   
import './Home.css';

class StudentResultlist extends React.Component {  
    constructor(props)
    {
        super(props)
        this.state=
        {
            StudentId:'',
            list:[]
        }
    }
    handleChange= (e)=> {   
        this.setState({[e.target.name]:e.target.value});   
      }   
    Result=()=>{
        axios.get('https://localhost:44384/api/Student_X_Course/GetMarks/'+this.state.StudentId)  
        .then(response => {  
          this.setState({ 
            list:response.data                                
           });  
           console.log(this);
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
        document.querySelector('.tableColor').style.color='purple';
    }
      
    render() {  
      return (  
        <div>  
        <Container className="App">   
        <h4>Result Informations</h4> 
        <Form className="form">   
         <Col>   
            <div className="inputField">
                <FormGroup row>   
                    <Col sm={6 } >   
                        <Input type="number" name="StudentId" onChange={this.handleChange} value={this.state.StudentId} placeholder="   Student ID" />   
                    </Col>   
                </FormGroup>
            </div>
        </Col>
        <Col>   
        <FormGroup row>   
            <Col sm={5}>   
            </Col>   
            <Col sm={1}>   
            <button type="button" onClick={this.Result} className="btn btn-success">Submit</button>   
            </Col>   
            <Col sm={1}>   
            <Button color="danger">Cancel</Button>{' '}   
            </Col>   
            <Col sm={5}>   
            </Col>   
            </FormGroup>   
        </Col>   
        </Form> 
        <table className="tableColor">
        <tbody>
            <tr >  
                <th><td>Student Id</td> </th>
                <td>{this.state.list[0]}</td>
            </tr>
            <tr >
                <th><td>Student Name</td></th>
                <td>{this.state.list[1]}</td> 
            </tr>
            <tr >
                <th><td>Courses</td></th>
                <td>{this.state.list[2]}</td>
            </tr>
            <tr >
                <th><td>Mark</td></th>
                <td>{this.state.list[3]}</td>
            </tr> 
            <tr  >
                <th><td>Total</td> </th>
                <td>{this.state.list[4]}</td>
            </tr>
            <tr  >
                <th><td>Max Total</td> </th>
                <td>{this.state.list[5]}</td>
            </tr> 
            </tbody>
          </table>  
        </Container>
        </div>  
      );  
    }  
  }  
  export default StudentResultlist;