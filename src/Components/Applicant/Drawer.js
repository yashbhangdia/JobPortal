import React, {useState} from 'react';
import { FaBars } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Drawer } from 'rsuite';
import { Divider } from 'rsuite';
import SideNav from './SideNav';
import 'rsuite/dist/styles/rsuite-default.css';

function DrawerComponent(props)
{
    const [show,setShow] = useState(false);

    const Toggle = () => {
        setShow(true);
    }
    const Close = () => {
        setShow(false);
    }

    return(
    <div>
    <button onClick={Toggle} className="draweropen">
        <h6>David Beckham<span className="ml-3"><FaBars size={24} /></span></h6>
    </button>
    <Drawer size="xs" placement="right" backdrop={true} show={show} onHide={Close} className="MyDrawer">
        <Drawer.Header>
            <Drawer.Title>DreamJobs</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
            <div className="drawerheader">
            <img src="https://celeb-heights.com/cache/b/david_beckham_640.jpg" className="imgdrawer"></img>
            <p style={{color: "#aaa"}}><span style={{color: "#e9896a"}}>Software Engineer </span>at Attract Solutions</p>
            <p>david_beckham_640@gmail.com</p>
            <p><IoLocationOutline/> London / England</p>
            </div>
            <Divider/>
            <SideNav logout={props.logout}></SideNav>
        </Drawer.Body>
   </Drawer>
   </div>
  );
}

export default DrawerComponent;