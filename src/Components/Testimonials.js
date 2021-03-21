import React from 'react';
import Card from './cards';
import './Styles/Testimonials.css'

function Testimonial()
{
    return(
        <div className="Testimonial">
            <div className="Heading pt-5">
                <h1>Kind words from our clients</h1>
                <p>What other people thought about the service provided by us</p>
            </div>
            <div className="row mx-0">
                <Card 
                    name="Robert"
                    skill="Web Designer"
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                />
                <Card 
                    name="Stacy"
                    skill="Data Scientist"
                    src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGZhY2UlMjBoYXBweXxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                />
                <Card 
                    name="Peter"
                    skill="Human Resources"
                    src="https://images.unsplash.com/photo-1605857840732-188f2f08cb31?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE3fHxmYWNlfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                />
            </div>
        </div>
    );
}

export default Testimonial;