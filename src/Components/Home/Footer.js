import React from 'react';
import '../Styles/Home/Footer.css';
import Target from '../Images/Target.png';
import envelope from '../Images/envelope.gif';
import {Link} from 'react-router-dom';

function Footer()
{
    return(
        <div>
            <div className="Footer">
                <div className="row mx-0">
                    <div className="col-md-2 Logo mr-5">
                        <img src={Target} className="col-md-9"></img>
                        <h2>DreamJob</h2>
                    </div>
                    <div className="col-md-4 content">
                        <h5>Frequently Asked Questions</h5>
                        <hr className="footline"></hr>
                        <p><a href="#"><span> - </span> How to Register</a></p>
                        <p><a href="#"><span> - </span> Privacy and Security </a></p>
                        <p><a href="#"><span> - </span> Lending Licenses </a></p>
                        <p><a href="#"><span> - </span> Terms and Conditions </a></p>
                    </div>
                    <div className="col-md-2 content">
                        <h5>Contact Us</h5>
                        <hr className="footline"></hr>
                        <p>Colin street west, victor 8001, Australia</p>
                        <p>+1 256-22769880</p>
                        <p>info@dreamjob.com</p>
                    </div>
                    <div className='col-md-3'>
                        <img src={envelope} className="col-md-12" alt="gif"></img>
                    </div>
                </div>
            </div>
            <div className="copyright py-1">
                <h6><b>Copyright © 2020 Dream Job | All rights reserved.</b></h6>
            </div>
        </div>
    );
}

export default Footer;