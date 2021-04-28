import React, {useState, Component} from 'react';
import 
{
    Navbar, NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Form, 
	FormGroup, 
	Label, 
	Input,
    Button
} from 'reactstrap';
import { Modal } from 'rsuite';
import { Divider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlinePhone} from 'react-icons/ai';
import {IoKeyOutline} from 'react-icons/io5';
import {AiOutlineUser} from 'react-icons/ai';

class NavBar extends Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
          ColorNavbar: false,
          signup: false,
          login: false,
          candidate: true,
          empolyer: false
        };
        this.ColorNav = this.ColorNav.bind(this);
        this.loginclose = this.loginclose.bind(this);
        this.loginopen = this.loginopen.bind(this);
        this.signupclose = this.signupclose.bind(this);
        this.signupopen = this.signupopen.bind(this);
        this.control = this.control.bind(this);
    }
    componentDidMount() 
    {
        window.addEventListener('scroll', this.ColorNav);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.ColorNav);
    }

    loginclose(){
    this.setState({ login: false });
    }
    loginopen() {
    this.setState({ login: true });
    }

    signupclose(){
    this.setState({ signup: false });
    }
    signupopen() {
    this.setState({ signup: true });
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
    
    control()
    {
        this.setState({
            candidate: !(this.state.candidate),
            employer: !(this.state.employer)
        });
    }

    render()
    {
        return(
            <>
            <Navbar className={this.state.ColorNavbar ? "navbar active" : "navbar"} dark sticky="top" expand="md">
            <NavbarBrand href="#home">Job Portal</NavbarBrand>
            <Nav className="ml-auto">
                <NavLink className="navlink" href="#home">Home</NavLink>
                <NavLink className="navlink" href="#About Us">About us</NavLink>
                <NavLink className="navlink" href="/Dashboard">Profile</NavLink>
                <NavLink className="navlink" onClick={this.loginopen} style={{cursor: "pointer"}}>Sign In</NavLink>
                <NavLink className="navlink" onClick={this.signupopen} style={{cursor: "pointer"}}>Sign up</NavLink>
            </Nav>
            </Navbar>
            <Modal show={this.state.signup} onHide={this.signupclose} backdrop="static" size="xs">
                <Modal.Header>
                </Modal.Header>
                <Modal.Body>
                    <h3 className="modalHeading">Sign Up</h3>
                    <Button className={"controlbutton " + (this.state.candidate ? "selected" : "")} onClick={this.control}>Candidate</Button>{' '}
                    <Button className={"controlbutton " + (this.state.employer ? "selected" : "")} onClick={this.control}>Employer</Button>
                    <Form action={"http://localhost:1234/" + (this.state.candidate ? "Applicant" : "Company") + "/create"} method="POST" className="pt-4">
                        <div className="cfield">
                            <Input type="text" name="name" id="Name" placeholder="Username"/>
                            <AiOutlineUser className="icon" size={24}/>
                        </div>
                        <div className="cfield">
                            <Input type="password" name="password" id="Passwrod" placeholder="Password" />
                            <IoKeyOutline className="icon" size={24}/>
                        </div>
                        <div className="cfield">
                            <Input type="email" name="email" id="Email" placeholder="Email" />
                            <AiOutlineMail className="icon" size={24}/>
                        </div>
                        <div className="cfield">
                            <Input type="tel" name="phoneno" id="Tel" placeholder="Phone no" />
                            <AiOutlinePhone className="icon" size={24}/>
                        </div>
                        <div className="cfield">
                        <Input type="submit" value="Sign Up" className="Submitbutton"/>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={this.state.login} onHide={this.loginclose} backdrop="static" size="xs">
                <Modal.Header>
                </Modal.Header>
                <Modal.Body>
                    <h3 className="modalHeading">User Login</h3>
                    <Button className={"controlbutton " + (this.state.candidate ? "selected" : "")} onClick={this.control}>Candidate</Button>{' '}
                    <Button className={"controlbutton " + (this.state.employer ? "selected" : "")} onClick={this.control}>Employer</Button>
                    <Form action={"http://localhost:1234/" + (this.state.candidate ? "Applicant" : "Company") + "/login"} method="POST" className="pt-4">
                        <div className="cfield">
                            <Input type="text" name="name" id="Name" placeholder="Username"/>
                            <AiOutlineUser className="icon" size={24}/>
                        </div>
                        <div className="cfield">
                            <Input type="password" name="password" id="Passwrod" placeholder="Password" />
                            <IoKeyOutline className="icon" size={24}/>
                        </div>
                        <div className="cfield">
                        <Input type="submit" value="Login" className="Submitbutton"/>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            </>
        )
    }
}

export default NavBar;