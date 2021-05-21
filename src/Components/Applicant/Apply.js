import React, {useState} from 'react';
import 
{
  Form, 
  Input,
  Button
} from 'reactstrap';
import { Modal } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import {FaWarehouse} from 'react-icons/fa';
import {IoLocationOutline} from 'react-icons/io5';
import {AiOutlineUser} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';
import {BiRupee} from 'react-icons/bi';

import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import '../Styles/Applicant/Apply.css';

function Apply(props)
{
    return (
    <div>
        <Modal show={props.apply} onHide={props.close} backdrop="static" size="sm">
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
        <h3 className="modalHeading">Apply for Job</h3>
        <div className="companylogo">
          <img src={props.src} />
        </div>
        <div className="compdetails row mx-0">
          <div className="col col-md-6">
          <h6><FaWarehouse size={18} className="r-icons" style={{'marginRight':'0.8rem'}}/>{props.company} </h6>
          </div>
          <div className="col col-md-6">
          <h6><IoLocationOutline size={18} className="r-icons" style={{'marginRight':'0.8rem'}}/>{props.loc} </h6>
          </div>
        </div>
        <div className="jobdetails">
          <h6><AiOutlineUser size={18} className="r-icons"/> {props.role}</h6>
          <h6>{props.skills.map(item => {
            return <span className="skillspan" >{item}</span>
          })}</h6>
          <p>{props.desc}</p>
          <h6><AiFillStar size={18} className="r-icons" /> {props.perks}</h6>
          <h5><BiRupee size={18} className="r-icons" />{props.salary}</h5>
        </div>
        <div className="confirm">
          <button className="apply">Apply</button>
          <button className="cancel">Cancel</button>
        </div>
        </Modal.Body>
        </Modal>
    </div>);
}

export default Apply;