import React from 'react';
import Hero from './Hero';
import SideNav from './SideNav';
import DashboardCards from './DashboardCards';
import Footer from '../Home/Footer';


function Dashboard()
{
    return(
        <div>
            <Hero name="Yash"/>
            <div className="row mx-0 mt-5 pb-5">
                <div className="col-lg-3">
                    <SideNav/>
                </div>
                <div className="col-lg-9">
                    <DashboardCards/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Dashboard;