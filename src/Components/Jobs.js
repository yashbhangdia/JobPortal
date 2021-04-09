import React from 'react';
import './Styles/jobs.css';


function jobs(props){
	return(
		<div className="col-md-12">
			<div className="Job">
				<div className="Logo row mx-0">
					<img src={props.src} alt="job" className="Clogo"></img>
				</div>
				<div className="row mx-0">
					<div className="Role col-md-12">{props.role}</div>
				</div>
				<div className="row mx-0">
					<div className="Cname col-md-12">{props.company}</div>
				</div>
				<hr></hr>
				<div className="row mx-0">
					<div className="col-md-12">
					<span className="Loc">{props.loc}</span>
					<a className="Apply" href="#" >APPLY NOW</a>
					</div>
				</div>
				
			</div>
		</div>
	);
}

export default jobs;