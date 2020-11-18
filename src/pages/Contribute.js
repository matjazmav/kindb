import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import Step1 from "./contribute/Step1"
import Step2 from "./contribute/Step2"
import Step3 from "./contribute/Step3"

import {
  Nav
} from 'react-bootstrap';

const Contribute = () => {
  const match = useRouteMatch();

  return (
    <section>
      <Nav fill className="justify-content-center">
        <Nav.Item>
          <Nav.Link as={Link} to={`${match.url}/1`}>Intro</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to={`${match.url}/2`}>Upload</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to={`${match.url}/3`}>Finish</Nav.Link>
        </Nav.Item>
      </Nav>

      <Switch>
        <Route path={`${match.url}/1`}>
          <Step1 />
        </Route>
        <Route path={`${match.url}/2`}>
          <Step2 />
        </Route>
        <Route path={`${match.url}/3`}>
          <Step3 />
        </Route>
      </Switch>

    </section>
  );
}

export default Contribute;