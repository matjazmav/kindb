import React from "react";
import {
  Button
} from "react-bootstrap";
import PersonImages from "../../components/PersonImages";

const Step2 = ({onBack, onNext}) => {
  return (
    <section>
      <h2 className="text-center">Upload</h2>
      <p>
        Please provide at least one facial image per person (father, mother and one or more children).
        Images provided on this step are stored only on your device.
      </p>
      <PersonImages type="Father" />
      <PersonImages type="Mother" />
      <PersonImages type="Son" index={1} />
      <PersonImages type="Son" index={2} />
      <p>
        On the next step you can review your provided images and finish the contribution process.
      </p>
      <div className="workflow-buttons">
        <Button variant="outline-secondary" onClick={onBack}>Back</Button>
        <Button variant="outline-primary" onClick={onNext}>Next</Button>
      </div>
    </section>
  );
};

export default Step2;