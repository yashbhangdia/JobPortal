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
        <Drawer logout={props.logout}></Drawer>
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                .typeString(`Welcome <span style="color: #e9896a; font-weight: 900;">David</span>`)
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
            options={{
                strings: ['Hello', 'World'],
                loop: true,
                cursor: "_"
            }}
        />
    </div>
    );
}

export default ResumeHero;