import React from "react";
import { 
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

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
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={`/`} >CommunityFaceKinDB</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={`/`} >Home</Nav.Link>
              <Nav.Link as={Link} to={`/contribute`}>Contribute</Nav.Link>
              <Nav.Link as={Link} to={`/database`}>Database</Nav.Link>
              <Nav.Link as={Link} to={`/about`}>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Switch>
          <Route exact path={`/`}>
            <Home />
          </Route>
          <Route path={`/contribute`}>
            <Contribute />
          </Route>
          <Route path={`/database`}>
            <Database />
          </Route>
          <Route path={`/about`} >
            <About />
          </Route>
          <Route>
            <NotFound path="*" />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

const NotFound = () => (<h1>404</h1>);

export default App;