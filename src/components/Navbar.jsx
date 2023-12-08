import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import "../index.css";
import {Route,Routes,Link, BrowserRouter} from "react-router-dom";

import Home from "./Home";
import AboutUs from "./AboutUs";
import OurKeyFeature from "./OurKeyFeature";
import OurActions from "./OurActions";

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
        <Navbar className="navbar bg-navbar bg-opacity-90 p-4 pb-5" expand="lg">
            <Container>
                <Navbar.Brand className="nabar-brand" as={Link} to="/" onClick={refreshPage}>Vizhi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />  
                <Navbar.Collapse id="basic-navbar-nav">  
                <Nav className="navs w-full flex-row space-x-10 ">
                    <Nav.Link className="nav-links text-white text-xl font-normal font-['Oldenburg'] tracking-tight" as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link className="nav-links text-white text-xl font-normal font-['Oldenburg'] tracking-tight" as={Link} to="/aboutUs">About Us</Nav.Link>
                    <Nav.Link className="nav-links text-white text-xl font-normal font-['Oldenburg'] tracking-tight" as={Link} to="/ourKeyFeature">Our Key Feature</Nav.Link>
                    <Nav.Link className="nav-links text-white text-xl font-normal font-['Oldenburg'] tracking-tight" as={Link} to="/ourActions">Our Actions</Nav.Link>
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