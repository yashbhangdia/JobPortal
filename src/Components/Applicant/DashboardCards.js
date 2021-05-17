import React from 'react';
import {HiOutlineBriefcase} from 'react-icons/hi';
import {AiOutlineUser} from 'react-icons/ai';
import {IoDocumentTextOutline} from 'react-icons/io5';
import {IoBulbOutline} from 'react-icons/io5';
import {IoBuildOutline} from 'react-icons/io5';
import {ImStack} from 'react-icons/im';
import '../Styles/Applicant/Dashboard.css';

function DashboardCards()
{
    return(
        <div>
            <div className="DashboardHeading">
                <h3>Candidates Dashboard</h3>
            </div>
            <div className="row pt-3 px-5 DashCards">
                <div className="col-lg-6 dashcard r t">
                    <a href="/profile">
                    <AiOutlineUser size={70} className="icon"/>
                    <h4>My Profile</h4>
                    <p>View Profile</p>
                    </a>
                </div>
                
                <div className="col-lg-6 dashcard t">
                    <a href="#">
                    <IoDocumentTextOutline size={70} className="icon"/>
                    <h4>My Resume</h4>
                    <p>View Resume</p>
                    </a>
                </div>
            </div>
            <div className="row pb-3 px-5 DashCards">
                <div className="col-lg-6 dashcard r">
                    <a href="#">
                    <HiOutlineBriefcase size={70} className="icon"/>
                    <h4>Applied Jobs</h4>
                    <p>14 Applications</p>
                    </a>
                </div>
                
                <div className="col-lg-6 dashcard">
                    <a href="/buildResume">
                    <ImStack size={70} className="icon"/>
                    <h4>Build Resume</h4>
                    <p>Edit Resume</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DashboardCards;