import React from 'react';
import HSBC from './Images/HSBC.png';
import Samsung from './Images/Samsung.png';
import Google from './Images/Google1.png';

function Companies(){
    return (
        <div className="companies">
            <div className="Heading pt-5" style={{color:"black"}}>
                <h1>Companies We've Helped</h1>
                <p>Some of the companies we've helped recruit excellent applicants over the years.</p>
            </div>
            <div className="row mx-0">
                <img src={HSBC} className="col-md-3 pb-2"></img>
                <img src={Samsung} className="col-md-3 pb-3"></img>
                <img src={HSBC} className="col-md-3 pb-2"></img>
                <img src={Samsung} className="col-md-3 pb-3"></img>
            </div>
        </div>
    );
}

export default Companies;