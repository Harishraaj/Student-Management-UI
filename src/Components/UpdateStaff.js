import React from 'react';    
import { Container, Col, Form, FormGroup, Input, Button } from 'reactstrap';   
import axios from 'axios'   
import './AddStudent.css'   
import 'bootstrap/dist/css/bootstrap.min.css';   
import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}
class UpdateStaff extends React.Component {   
    constructor(props) {   
        super(props)          
        this.onChangeStaffName = this.onChangeStaffName.bind(this);   
        this.onChangePhoneNo= this.onChangePhoneNo.bind(this);
        this.onChangeDoj= this.onChangeDoj.bind(this);   
        this.onChangeAddress = this.onChangeAddress.bind(this);  
        this.onChangeCity = this.onChangeCity.bind(this);         
        this.onChangeState = this.onChangeState.bind(this);
        this.state = { 
            StaffId:'',
            StaffName:'',  
            PhoneNo: '', 
            Doj:'',  
            Address:'',  
            City:'',
            State: ''              
        }   
    }    

  componentDidMount() {  
    let param = this.props.params;   
    axios.get('https://localhost:44384/api/Staff/'+param.staffid)    
          .then(response => {   
              this.setState({   
                StaffId: response.data.StaffId, 
                StaffName: response.data.StaffName,
                PhoneNo: response.data.PhoneNo,
                Doj:response.data.Doj, 
                Address: response.data.Address,   
                City: response.data.City,   
                State: response.data.State 
                 });   
          })   
          .catch(function (error) {   
              console.log(error);   
          })  

    }    

    onChangeStaffName(e) {   
            this.setState({   
                StaffName: e.target.value   
            });   

    }   
    onChangePhoneNo(e) {   
        this.setState({   
            PhoneNo: e.target.value   
        });   
    }  
    onChangeDoj(e) {   
        this.setState({   
            Doj: e.target.value   
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
    UpdateStaff=()=>{   
    const obj = {
        StaffId: this.state.StaffId, 
        StaffName: this.state.StaffName, 
        PhoneNo: this.state.PhoneNo, 
        Doj: this.state.Doj, 
        Address: this.state.Address, 
        City:this.state.City, 
        State: this.state.State 
        };
        axios.put('https://localhost:44384/api/Staff/', obj)   
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
            <h4>Staff Informations</h4>   
            <Form className="form">   
                <Col>   
                <FormGroup row>   
                    <Col sm={10}>   
                    <Input type="text" name="StaffName" onChange={this.onChangeStaffName} value={this.state.StaffName} placeholder="   Name" />   
                    </Col>   
                </FormGroup>   
                <FormGroup row>   
                    <Col sm={10}>   
                    <Input type="number" name="PhoneNo" onChange={this.onChangePhoneNo} value={this.state.PhoneNo} placeholder="   Phone no" />   
                    </Col>   
                </FormGroup> 
                <FormGroup row>   
                    <Col sm={10}>   
                    <Input type="datetime-local" name="Doj" onChange={this.onChangeDoj} value={this.state.Doj} placeholder="   Doj" />   
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
                    <button type="button" onClick={this.UpdateStaff} className="btn btn-success">Submit</button>   
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
export default withParams(UpdateStaff);   

 