import React , { useEffect, useState } from 'react';
import './Styles/stats.css';
import Counter from './counter';

function Stats(props)
{
  
    return(
        <div className="stats">
        <div className="heading pt-4">
            <h1>Job Hunt site stats</h1>
            <p>
                How many people we’ve helped find a job and companies have found recruits. It's a pretty awesome stats area!
            </p>
        </div>
        <div className="row pt-4 mx-0">
            <div className="col-md-3 pb-4">
                <Counter end="42" />
                <h5 className="countername">Jobs Posted</h5>
            </div>
            <div className="col-md-3 pb-4">
                <Counter end="20" />
                <h5 className="countername">Jobs Filled</h5>
            </div>
            <div className="col-md-3 pb-4">
                <Counter end="67" />
                <h5 className="countername">Companies</h5>
            </div>
            <div className="col-md-3 pb-4">
                <Counter end="80" />
                <h5 className="countername">Members</h5>
            </div>
        </div>
        </div>
    );
}

export default Stats;