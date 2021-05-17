import React, { useState } from 'react';
import '../Styles/Home/Jobs.css';

import Register from './Register';
import Login from './Login';

function Jobs(props){

	const [signup, showsignup] = useState(false);
	const [Apply, showApply] = useState(false);

	const toggleSignup = e => {
		showsignup(!signup);
	}

	const toggleApply = e => {
		showApply(!signup);
	}

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
					<a className="Apply" onClick={props.auth ? toggleApply : toggleSignup} style={{'cursor':"pointer"}} >APPLY NOW</a>
					{signup && <Register open={toggleSignup} close={toggleSignup} signup={signup}/>}
					{/* {Apply && <confirmApply />} */}
					</div>
				</div>
				
			</div>
		</div>
	);
}

export default Jobs;