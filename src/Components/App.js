import './Styles/App.css';
import NavBar from './NavbarHome';
import React, { Component} from 'react';
import SearchComponent from './SearchComponent';
import Testimonial from './Testimonials';
import {   
  Form,
  Button,
  Input,
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <div className="HeroImage">
          <SearchComponent></SearchComponent>
        </div> 
        <div className="random">
          ""
        </div>
        <Testimonial />      
      </div>
    );
  }
}

export default App;
