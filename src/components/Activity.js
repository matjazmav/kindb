import React from "react";
import classNames from "classnames";
import {
  Button
} from "react-bootstrap";
import "./Activity.scss";
import Spinner from "./Spinner";

const Activity = ({children, isVisible}) => {
  return (
    <div className={classNames({
      "activity": true,
      "invisible": !isVisible
    })}>
      <AcitvitySpinner />
      {children}
    </div>
  );
};

const AcitvitySpinner = () => <div className="activity-spinner"><Spinner /></div>;

Activity.OkButton = (props) => <Button className="activity-btn activity-ok-btn" {...props}/>;
Activity.BackButton = (props) => <Button className="activity-btn activity-back-btn" variant="secondary" {...props}/>;

export default Activity;