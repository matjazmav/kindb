import React from "react";
import {
  useRouteMatch,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Step1 from "./contribute/Step1"
import Step2 from "./contribute/Step2"
import Step3 from "./contribute/Step3"

const Contribute = () => {
  const route = useRouteMatch();

  return (
    <section>
      <h1>Contribute</h1>

      <ul>
        <li>
          <Link to={`${route.url}/1`}>Intro</Link>
        </li>
        <li>
          <Link to={`${route.url}/2`}>Upload</Link>
        </li>
        <li>
          <Link to={`${route.url}/3`}>Finish</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${route.url}/1`}>
          <Step1 />
        </Route>
        <Route path={`${route.url}/2`}>
          <Step2 />
        </Route>
        <Route path={`${route.url}/3`}>
          <Step3 />
        </Route>
      </Switch>

    </section>
  );
}

export default Contribute;