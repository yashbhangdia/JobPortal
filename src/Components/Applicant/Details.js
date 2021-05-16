import React, { Component}  from 'react';
import axios from 'axios';
import EducationForm from './EducationForm';
import ProjectForm from './ProjectForm';
import RenderEdu from './RenderEdu';
import RenderExp from './RenderExp';
import RenderProj from './RenderProj';
import RenderAch from './RenderAch';
import RenderSkills from './RenderSkills';
import SkillsForm from './SkillsForm';

class EduDetails extends Component {
	
	state = {
		items: {},
		isLoaded: false,
		isEmpty: true,
		field: this.props.field
	};

	componentDidMount() {
		axios.get("http://localhost:1234/Applicant/"+this.props.aid)
		.then((response) => {
		  const data = response.data;
		  //console.log(data);
		  this.setState({ items: data, isLoaded: true});
		  console.log("fine1");
		  if(this.state.field=="edu" && data.resume.education.length){
			this.setState({isEmpty: false});
		  }
		  if(this.state.field=="exp" && data.resume.experience.length)
		  {
			this.setState({isEmpty: false});
		  }
		  if(this.state.field=="proj" && data.resume.projects.length){
			this.setState({isEmpty: false});
		  } 
		  if(this.state.field=="ach" && data.resume.achievements.length){
			this.setState({isEmpty: false});
		  }
		  if(this.state.field=="skill" && data.resume.skills.length){
			this.setState({isEmpty: false});
		  } 
		  //console.log('Data has been received!!');
		})
		.catch(() => {
		  alert("error retrieving data");
		});
	}


	render() {
	  const items = this.state.items;
		return (<div>			
					{this.state.isLoaded && !this.state.isEmpty && this.state.field=="edu" &&
						<div>
						{items.resume.education.map((edu) => {
							return(<div><RenderEdu edu={edu} aid={this.props.aid}></RenderEdu></div>)
						})}
					</div>}
					{this.state.isEmpty && this.state.field=="edu" && <EducationForm aid={this.props.aid} update={false}/>}
					{/* since experience is optional, if there's no data, no need to display form */}
					{this.state.isLoaded && !this.state.isEmpty && this.state.field=="exp" &&
						<div>
						{items.resume.experience.map((exp, ind) => {
							return(<div><RenderExp exp={exp} aid={this.props.aid} expid={ind}></RenderExp></div>)
						})}
					</div>}
					{this.state.isLoaded && !this.state.isEmpty && this.state.field=="skill" &&
						<RenderSkills data={items.resume.skills} aid={this.props.aid}/>
					}
					{this.state.isEmpty && this.state.field=="skill" && <SkillsForm aid={this.props.aid} />}
					{this.state.isLoaded && !this.state.isEmpty && this.state.field=="proj" &&
						<div>
						{items.resume.projects.map((proj, ind) => {
							return(<div><RenderProj proj={proj} aid={this.props.aid} pid={ind} /></div>)
						})}
					</div>}
					{this.state.isEmpty && this.state.field=="proj" && <ProjectForm aid={this.props.aid} update={false}/>}
					{/* since achievements are optional, if there's no data, no need to display form */}
					{this.state.isLoaded && !this.state.isEmpty && this.state.field=="ach" &&
						<div>
						{items.resume.achievements.map((ach, ind) => {
							return(<div><RenderAch ach={ach} aid={this.props.aid} achid={ind} /></div>)
						})}
					</div>}
				</div>
		);
   }
}
export default EduDetails;
