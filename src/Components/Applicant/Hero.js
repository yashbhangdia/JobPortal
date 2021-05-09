import React, {useState} from 'react';
import Drawer from './Drawer';
import Typewriter from 'typewriter-effect';
import '../Styles/Applicant/Hero.css';

function ResumeHero(props)
{
    
    return(
    <div className="ResumeHero">
        <div className="Brand">
            <h2>DreamJobs</h2>
        </div>
        <Drawer logout={props.logout} name={props.name}></Drawer>
    
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
            options={{
                strings: [`Hello <span style="color: #e9896a; font-weight: 900;">`+props.name.split(" ")[0]+`</span>`],
                autoStart: true,
                loop: true,
                cursor: "|"
            }}
        />
    </div>
    );
}

export default ResumeHero;