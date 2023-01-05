import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Home from "./Components/Home";
import AddStudent from "./Components/AddStudent";
import AddDepartment from './Components/AddDepartment';
import Departmentlist from './Components/Departmentlist';
import Studentlist from './Components/Studentlist';
import Course from './Components/Course';
import Courselist from './Components/Courselist';
import AddCourse from './Components/AddCourse';
import Resultlist from './Components/Resultlist';
import AddResult from './Components/AddResult';
import UpdateCourse from './Components/UpdateCourse';
import Stafflist from './Components/Stafflist';
import AddStaff from './Components/AddStaff';
import StudentCourselist from './Components/StudentCourselist';
import AddStudentCourse from './Components/AddStudentCourse'; 
import StaffCourselist from './Components/StaffCourselist';
import AddStaffCourse from './Components/AddStaffCourse';
import UpdateDepartment from './Components/UpdateDepartment';
import UpdateResult from './Components/UpdateResult';
import UpdateStudent from './Components/UpdateStudent';
import UpdateStaff from './Components/UpdateStaff';
import UpdateStudentCourse from './Components/UpdateStudentCourse';
import UpdateStaffCourse from './Components/UpdateStaffCourse';
import Graph from './Components/Graph';
import StudentResultlist from './Components/StudentResultlist';

class App extends Component
{
    render()
    {
        return(       
          <Router>    
                 <div className="Menu">                   
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Studentlist">Student</Link></li>       
                        <li><Link to="/Stafflist">Staff</Link></li>   
                        <li><Link to="/Departmentlist">Department</Link></li>   
                        <li><Link to="/Course">Course</Link></li>      
                        <li><Link to="/Resultlist">Result</Link></li>     
                    </ul>
                    <Routes>
                        <Route exact path='/' element={< Home/>}></Route>
                        <Route exact path='/Dashboard' element={<Graph/>}></Route>
                        <Route exact path='/Studentlist' element={< Studentlist />}></Route>
                        <Route exact path='/Studentlist/AddStudent' element={< AddStudent />}></Route> 
                        <Route exact path='/Stafflist' element={< Stafflist />}></Route> 
                        <Route exact path='/Stafflist/AddStaff' element={< AddStaff />}></Route> 
                        <Route exact path='/Departmentlist' element={< Departmentlist />}></Route>
                        <Route exact path='/Departmentlist/AddDepartment' element={<AddDepartment />}></Route>
                        <Route exact path='/Course' element={< Course />}></Route>
                        <Route exact path='/Course/Courselist' element={< Courselist />}></Route>
                        <Route exact path='/Course/StudentCourselist' element={< StudentCourselist />}></Route>
                        <Route exact path='/Course/StudentCourselist/AddStudentCourse' element={< AddStudentCourse />}></Route>
                        <Route exact path='/Course/Courselist/AddCourse' element={< AddCourse />}></Route>
                        <Route exact path='/Course/StaffCourselist' element={< StaffCourselist />}></Route>
                        <Route exact path='/Course/StaffCourselist/AddStaffCourse' element={< AddStaffCourse />}></Route>
                        <Route exact path='/Resultlist' element={<Resultlist/>}></Route>
                        <Route exact path='/Resultlist/AddResult' element={<AddResult/>}></Route>
                        <Route  path='/Course/Courselist/UpdateCourse/:courseid'  element={<UpdateCourse/>} ></Route>
                        <Route  path='/Departmentlist/UpdateDepartment/:departmentid' element={< UpdateDepartment />}></Route>
                        <Route  path='/Resultlist/UpdateResult/:resultid' element={< UpdateResult />}></Route>
                        <Route  path='/Studentlist/UpdateStudent/:studentid' element={< UpdateStudent />}></Route>
                        <Route  path='/Stafflist/UpdateStaff/:staffid' element={< UpdateStaff />}></Route>
                        <Route exact path='/Course/StudentCourselist/UpdateStudentCourse/:studentcourseid' element={< UpdateStudentCourse />}></Route>
                        <Route exact path='/Course/StaffCourselist/UpdateStaffCourse/:staffcourseid' element={< UpdateStaffCourse />}></Route>
                        <Route exact path='/Course/StudentCourselist/Result/' element={< StudentResultlist/>}></Route>

                    </Routes>            
                </div>   
            </Router>               
        );
    }  
}

export default App;
