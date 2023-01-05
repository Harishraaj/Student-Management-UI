import React from 'react';
import './Course.css';
import { useNavigate } from "react-router-dom";
function Course()
{
    const navigate = useNavigate();
    const AddCourse = () => {
       navigate('Courselist');
    }
    const AddStudentCourse = () => {
        navigate('StudentCourselist');
     }
     const AddStaffCourse = () => {
        navigate('StaffCourselist');
     }
    return(
        <div className="container">
            <h4>Course List</h4>
            <div className="card">
                <div id="course">
                    <button onClick={AddCourse}>Course</button>
                </div>
                <h6>Course</h6>
            </div>
            <div className="card">
                <div id="studentCourse">
                    <button onClick={AddStudentCourse}>Student</button>
                </div>
                <h6>Student</h6>
            </div>
            <div className="card">
                <div id="staffCourse">
                    <button onClick={AddStaffCourse}>Staff</button>
                </div>
                <h6>Staff</h6>
            </div>
        </div>
    );
}
export default Course;