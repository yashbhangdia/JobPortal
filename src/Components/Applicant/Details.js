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
import RenderPersonal from './RenderPersonal';
import RenderCategories from './RenderCategories';
import RenderContact from './RenderContact';
import RenderSocial from './RenderSocial';

class Details extends Component {
	
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
		  if(this.state.field=="personal" && Object.keys(data).length){
			this.setState({isEmpty: false});
		  }
		  if(this.state.field=="categories" && data.categories.length)
		  {
			  this.setState({isEmpty: false});
		  }
		  if(this.state.field=="contact")
		  {
			  if(Object.keys(data.address).length)
			  {
				if(data.address.city && data.address.country && data.address.state && data.address.pincode)
				{
					this.setState({isEmpty: false});
				}
			  }
		  }
		  if(this.state.field=="social" && data.socialMedia)
		  {
			this.setState({isEmpty: false});
		  }
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
					{this.state.isLoaded && !this.state.isEmpty && this.state.field=="personal" &&
						<div>
						<RenderPersonal personal={items} aid={this.props.aid}></RenderPersonal>
					</div>}
					{this.state.isLoaded && !this.state.isEmpty && this.state.field=="categories" &&
						<div>
						<RenderCategories empty={false} categories={items.categories} aid={this.props.aid}></RenderCategories>
					</div>}
					{this.state.isEmpty && this.state.field=="categories" && <div>
						<RenderCategories empty={true} categories={items.categories} aid={this.props.aid}></RenderCategories>
					</div>}
					{this.state.isLoaded && !this.state.isEmpty && this.state.field=="contact" &&
						<div>
						<RenderContact empty={false} contact={items} aid={this.props.aid}></RenderContact>
					</div>}
					{this.state.isEmpty && this.state.field=="contact" && <div>
						<RenderContact empty={true} contact={items} aid={this.props.aid}></RenderContact>
					</div>}
					{this.state.isLoaded && !this.state.isEmpty && this.state.field=="social" &&
						<div>
						<RenderSocial empty={false} social={items.socialMedia} aid={this.props.aid}></RenderSocial>
					</div>}
					{this.state.isEmpty && this.state.field=="social" && <div>
						<RenderSocial empty={true} social={items} aid={this.props.aid}></RenderSocial>
					</div>}
					
					
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
export default Details;
