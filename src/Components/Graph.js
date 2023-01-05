import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import './Graph.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Graph extends Component {
	render() {
		const options = {
			animationEnabled: true,
			exportFileName: "New Year Resolutions",
			exportEnabled: true,
			title:{
				text: ""
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 32, label: "Student" },
					{ y: 22, label: "Staff" },
					{ y: 15, label: "Course" },
					{ y: 19, label: "StudentCourse" },
					{ y: 5, label: "StaffCourse" },
				]
			}]
		}
		return (
	<div class="home-content">
	<h5>Dashboard</h5>
      <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Students</div>
            <div class="number">30 +</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Up from yesterday</span>
            </div>
          </div>
          <i class='bx bx-cart-alt cart'></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Staffs</div>
            <div class="number">10 +</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Up from yesterday</span>
            </div>
          </div>
          <i class='bx bxs-cart-add cart two' ></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Courses</div>
            <div class="number">10 +</div>
            <div class="indicator">
			<i class="bi bi-book"></i>
              <span class="text">Up from yesterday</span>
            </div>
          </div>
          <i class='bx bx-cart cart three' ></i>
        </div>
        </div>
		
		<div className='graph'>
			<CanvasJSChart options = {options}/>
		</div>
		</div>
		);
	}
}
export default Graph;     