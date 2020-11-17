import React from "react";
import { Router, Link } from "@reach/router"

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  Container
} from 'react-bootstrap';

import Home from "./pages/Home"
import Contribute from "./pages/Contribute"
import Database from "./pages/Database"
import About from "./pages/About"

const baseUrl = process.env.REACT_APP_BASE_URL;

const App = () => {

  return (
    <section>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={`${baseUrl}/`} >CommunityFaceKinDB</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={`${baseUrl}/`} >Home</Nav.Link>
              <Nav.Link as={Link} to={`${baseUrl}/contribute`}>Contribute</Nav.Link>
              <Nav.Link as={Link} to={`${baseUrl}/database`}>Database</Nav.Link>
              <Nav.Link as={Link} to={`${baseUrl}/about`}>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Router>
          <Home path={`${baseUrl}/`}/>
          <Contribute path={`${baseUrl}/contribute/*`} />
          <Database path={`${baseUrl}/database`} />
          <About path={`${baseUrl}/about`} />
          <NotFound default />
        </Router>
      </Container>
    </section>
  );
};

const NotFound = () => (<h1>404</h1>);

export default App;