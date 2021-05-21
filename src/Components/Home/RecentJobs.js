import React, { useEffect, useState} from 'react';
import Jobs from './Jobs';
import JobList from '../Data/Job';
import '../Styles/Home/RecentJobs.css'
import axios from 'axios';
import jobs from '../Data/Job';

const len = JobList.length;
const limit = 3;


function RecentJobs(props){
	const [showMore,setShowMore] = useState(true);
	const [list,setList] = useState(JobList.slice(0, 6));
	const [index,setIndex] = useState(6);
	const [jobs, setJobs] = useState([]);
	const [isLoaded, setLoaded] = useState(false);
	const [jobLen, setJoblen] = useState(0);
	
	const loadMore = () => {	
		const newIndex = index + limit;
	
		var newList = []
		var newShowMore = true;
		if(props.auth)
		{
			newShowMore = newIndex < (jobLen - 1);
			newList = list.concat(jobs.slice(index,newIndex));
		}
		else
		{
			newShowMore = newIndex < (len - 1);
			newList = list.concat(JobList.slice(index, newIndex));	
		}
		setIndex(newIndex);
		setList(newList);
		setShowMore(newShowMore);
	}

	function getJobs()
	{
		axios.get("http://localhost:1234/Job/")
		.then((res)=>{
			setJobs(res.data);
			setLoaded(true);
			setList(jobs.slice(0,6));
			setJoblen(jobs.length);
			return true;
		})
		.catch((err) => {
			//console.log(err);
		})
	}

	return(
		<div className="RecentJobs">
			<div className="JobHeading pt-5">
				<h1>Recent Jobs</h1>
				<p>
					Leading Employers already using job and talent.
				</p>
			</div>
			<div className="Container">
				<div className="row">
							{props.auth && !isLoaded && getJobs()}
							{!props.auth && list.map((job) => { return <div className="col-md-4 px-1"><Jobs auth={props.auth} role={job.role} company={job.company} loc={job.loc} src={job.logo}></Jobs></div>})}
							{isLoaded && list.map((job) => {
								return <div className="col-md-4 px-1"><Jobs auth={props.auth} compid={job.companyID} role={job.role}
								jobDesc={job.jobDescription} salary={job.salary} ></Jobs></div>
							})}
				</div>
				<div className="row">
					{showMore && <button className="More" onClick={loadMore}>Load More Listings</button>}
				</div>
			</div>
		</div>
	);
}


export default RecentJobs;