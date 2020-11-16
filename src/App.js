import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

const App = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" >CommunityFaceKinDB</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/" >Home</Nav.Link>
              <Nav.Link as={Link} to="/contribute/1">Contribute</Nav.Link>
              <Nav.Link as={Link} to="/database">Database</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Switch>
          <Route path="/contribute">
            <Contribute />
          </Route>
          <Route path="/database">
            <Database />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;