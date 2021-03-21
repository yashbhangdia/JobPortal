import React, {useState, Component} from 'react';
import 
{
    Navbar, NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Col, 
} from 'reactstrap';

class NavBar extends Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
          ColorNavbar: false
        };
        this.ColorNav = this.ColorNav.bind(this);
    }
    componentDidMount() 
    {
        window.addEventListener('scroll', this.ColorNav);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.ColorNav);
      }

    ColorNav() {
        if(window.scrollY >= 70)
        {
            this.setState({
                ColorNavbar: true
            });
        }
        else
        {
            this.setState({
                ColorNavbar: false
            });
        }
      }
    

    render()
    {
        return(
            <Navbar className={this.state.ColorNavbar ? "navbar active" : "navbar"} dark sticky="top" expand="md">
            <NavbarBrand href="#home">Job Portal</NavbarBrand>
            <Nav className="ml-auto">
                <NavLink className="navlink" href="#home">Home</NavLink>
                <NavLink className="navlink" href="#About Us">About us</NavLink>
                <NavLink className="navlink" href="#Products">Products</NavLink>
                <NavLink className="navlink" href="#SignIn">Sign In</NavLink>
                <NavLink className="navlink" href="#SignUp">Sign up</NavLink>
            </Nav>
            </Navbar>
        )
    }
}

export default NavBar;