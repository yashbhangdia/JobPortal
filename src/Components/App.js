import './Styles/App.css';
import NavBar from './NavbarHome';
import React, { Component} from 'react';
import SearchComponent from './SearchComponent';
import Testimonial from './Testimonials';
import Stats from './Stats';
<<<<<<< HEAD
import Companies from './Companies';
import Footer from './Footer';
import ScrollToTop from './scrollToTop';
=======
import RecentJobs from './RecentJobs';
>>>>>>> bb1e22d18df15b61db64fafad4f562a9eab03fd6

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <div className="HeroImage">
          <SearchComponent></SearchComponent>
        </div>
        <RecentJobs />
        <Stats />
        <Companies />
        <Testimonial />
        <Footer/>
      </div>
    );
  }
}

export default App;
