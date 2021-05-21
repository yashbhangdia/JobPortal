import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../Styles/Applicant/RenderApplied.css';
import {RiDeleteBin5Fill} from 'react-icons/ri';
import {Table} from 'reactstrap';
import {IoLocationOutline} from 'react-icons/io5';

function RenderApplied(props)
{
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [appliedlist, setappliedlist] = useState(props.applied)
    const [date, setdate] = useState("")
    const [jobrole, setjobrole] = useState("")
    const [comp, setcomp] = useState("")
    const [loc, setloc] = useState("")

    const [isEdit, setIsEdit] = useState(false);
    function editPersonal(){
		setIsEdit(true);
	}

    function retrieveComp(id) {
        axios.get("http://localhost:1234/Company/"+id)
        .then( (res) => {
          setcomp(res.data.Company_Name);
          setloc(res.data.Location);
        } )
        .catch( (err) => {
            alert('Error retrieving Company details.');
        } )
    }

    function retrieveJob(id) {
        axios.get("http://localhost:1234/Job/"+id)
        .then( (res) => {
          setjobrole(res.data.role);
          //console.log(res.data.companyID);
          retrieveComp(res.data.companyID)  
        } )
        .catch( (err) => {
            alert('Error retrieving Job details.');
        } )
    }

    function retrieveApp(id) {
        axios.get("http://localhost:1234/Application/"+id)
        .then( (res) => {
            setdate(new Date(res.data.DoA.split("T")[0]).toString());
            retrieveJob(res.data.JobID);
        } )
        .catch( (err) => {
            alert('Error retrieving Application details.');
        } )
    }

    return(<div>
    <Table>
      <thead>
        <tr>
          <th>Applied Job</th>
          <th>Position</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { appliedlist.map( (item) => {
            retrieveApp(item);
            return <tr>
            <td>
                <ul className="appliedcompany">
                   <li>{comp}</li>
                   <li className="appliedlocation"><IoLocationOutline />{loc}</li> 
                </ul>
            </td>
            <td>{jobrole}</td>
            <td>{ date.split(" ")[1] + " " + date.split(" ")[2] + ", " + date.split(" ")[3] }</td>
            <td><RiDeleteBin5Fill size={20} className="r-icons"/></td>
          </tr>
        })}
      </tbody>
    </Table>

    </div>);
}

export default RenderApplied;