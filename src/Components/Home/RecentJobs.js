import React, { useState } from 'react';
import Jobs from './Jobs';
import JobList from '../Data/Job';
import '../Styles/Home/RecentJobs.css'


const len = JobList.length;
const limit = 3;


function RecentJobs(props){
	const [showMore,setShowMore] = useState(true);
	const [list,setList] = useState(JobList.slice(0, 6));
	const [index,setIndex] = useState(6);
	
	const loadMore = () => {	
		const newIndex = index + limit;
		const newShowMore = newIndex < (len - 1);
		const newList = list.concat(JobList.slice(index, newIndex));	
		setIndex(newIndex);
		setList(newList);
		setShowMore(newShowMore);
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
					{list.map((job) => {
						return <div className="col-md-4 px-1">
							<Jobs auth={props.auth} role={job.role} company={job.company} loc={job.loc} src={job.logo}></Jobs>
						</div>
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