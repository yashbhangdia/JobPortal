import React, { Component} from 'react';
import {   
    Form,
    Button,
    Input,
    FormGroup
} from 'reactstrap';

class SearchComponent extends Component
{
    render()
    {
        return(
            <div className="searchbar col-lg-8">
                <div className="HeroText">
                    <h1>The Easiest Way To Get Your New Job!</h1>
                    <p>Find Jobs, Employment and Career Opportunities</p>
                </div>
                <Form className="searchform">
                    <Input type="text" placeholder="Search" className="search"/>
                    <Button>Search</Button>
                </Form>
            </div>
        )
    }
}

export default SearchComponent;