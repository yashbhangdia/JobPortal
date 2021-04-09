import './Styles/App.css';
import NavBar from './NavbarHome';
import React, { Component} from 'react';
import SearchComponent from './SearchComponent';
import Testimonial from './Testimonials';
import Stats from './Stats';
import Companies from './Companies';
import Footer from './Footer';
import ScrollToTop from './scrollToTop';

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
        <Stats />
        <Companies />
        <Testimonial />
        <Footer/>
      </div>
    );
  }
}

export default App;
