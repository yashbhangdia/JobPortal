import React from 'react';
import {HiOutlineBriefcase} from 'react-icons/hi';
import {AiOutlineUser} from 'react-icons/ai';
import {IoDocumentTextOutline} from 'react-icons/io5';
import {IoBulbOutline} from 'react-icons/io5';

import '../Styles/Applicant/Dashboard.css';

function DashboardCards()
{
    return(
        <div>
            <div className="DashboardHeading">
                <h2>Candidate Dashboard</h2>
            </div>
            <div className="row pt-3 px-5 DashCards">
                <div className="col-lg-6 dashcard r t">
                    <AiOutlineUser size={70} className="icon"/>
                    <h4>My Profile</h4>
                    <p>View Profile</p>
                </div>
                
                <div className="col-lg-6 dashcard t">
                    <IoDocumentTextOutline size={70} className="icon"/>
                    <h4>My Resume</h4>
                    <p>View Resume</p>
                </div>
            </div>
            <div className="row pb-3 px-5 DashCards">
                <div className="col-lg-6 dashcard r">
                    <HiOutlineBriefcase size={70} className="icon"/>
                    <h4>Applied Jobs</h4>
                    <p>14 Applications</p>
                </div>
                
                <div className="col-lg-6 dashcard">
                    <IoBulbOutline size={70} className="icon"/>
                    <h4>Recommended Jobs</h4>
                    <p>20 New Jobs</p>
                </div>
            </div>
        </div>
    );
}

export default DashboardCards;