import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import "../index.css";
import {Route,Routes,Link, BrowserRouter} from "react-router-dom";

import Home from "./Home/Home";
import AboutUs from "./AboutUs";
import OurKeyFeature from "./Home/OurKeyFeature";
import OurActions from "./OurActions";
import SocialMedia from "./SocialMedia";

function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 500);
    console.log('page to reload')
}

function NavBar(){
    return (
    <BrowserRouter>
    <div>
        <Navbar className="navbar bg-navbar bg-opacity-90 text-light" expand="lg">
            <Container>
                <Navbar.Brand className="nabar-brand" as={Link} to="/" onClick={refreshPage}>
                    <img src="../../images/navbar.png" alt="" className="absolute h-28 top-0 left-0"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />  
                <Navbar.Collapse id="basic-navbar-nav">  
                <Nav className="navs w-full ml-24 py-4 flex-row justify-between justify-items-center align-items-center">
                    <div className="flex flex-row space-x-24 -ml-5">
                        <Nav.Link className="nav-links text-white text-xl font-normal font-['Oldenburg'] tracking-tight hover:!text-lime-400" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="nav-links text-white text-xl font-normal font-['Oldenburg'] tracking-tight hover:!text-lime-400" as={Link} to="/aboutUs">About Us</Nav.Link>
                        <Nav.Link className="nav-links text-white text-xl font-normal font-['Oldenburg'] tracking-tight hover:!text-lime-400" as={Link} to="/ourKeyFeature">Our Key Feature</Nav.Link>
                        <Nav.Link className="nav-links text-white text-xl font-normal font-['Oldenburg'] tracking-tight hover:!text-lime-400" as={Link} to="/ourActions">Our Actions</Nav.Link>
                    </div>
                    <div className="absolute right-10">
                            <SocialMedia />
                    </div>
                </Nav>
                </Navbar.Collapse> 
            </Container>
        </Navbar>
        <div>
        <Routes>
            <Route exact path="/"  element={<Home />}/>
            <Route path="/home"  element={<Home />}/>
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/ourKeyFeature" element={<OurKeyFeature />} />
            <Route path="/ourActions" element={<OurActions />} />
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  
    );
}

export default NavBar;