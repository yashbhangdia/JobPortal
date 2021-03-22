import React from "react";
import './Styles/cards.css';

function card(props)
{
    return (
        <div className="Card col-md-4">
            <img src={props.src} alt="Hello" className="profile col-md-5"></img>
            <div className="row pt-4">
                <div className="Name col-md-8">
                  <h3>{props.name}<span>{props.skill}</span></h3>
                </div>
            </div>
            <div className="row pt-2 pb-4">
                <div className="col-md-12">
                    <p className="testimonial">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default card;