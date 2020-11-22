import React from "react";
import {
  Button
} from "react-bootstrap";

const Step4 = ({onNext}) => {
  return (
    <section className="text-center">
      <h2>Thank you</h2>
      <p>
        Thank your for your contribution.
      </p>
      <div className="workflow-buttons">
        <Button variant="outline-primary" onClick={onNext}>Close</Button>
      </div>
    </section>
  );
};

export default Step4;