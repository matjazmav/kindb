import React from "react";
import {
  Button
} from "react-bootstrap";

const Step3 = ({onBack, onNext}) => {
  const [isConsentChecked, setIsConsentChecked] = React.useState(false);

  const onConsentHandler = (event) => {
    setIsConsentChecked(event.target.checked);
  }

  return (
    <section>
      <h2 className="text-center">Finish</h2>
      <p>
        With click on the finish button your provided images will be uploaded to our dataset.
      </p>
      <input type="checkbox" onChange={onConsentHandler} /> I consent with terms and conditions.
      <div className="workflow-buttons">
        <Button variant="outline-secondary" onClick={onBack}>Back</Button>
        <Button variant="outline-primary" onClick={onNext} disabled={!isConsentChecked}>Finish</Button>
      </div>
    </section>
  );
};

export default Step3;