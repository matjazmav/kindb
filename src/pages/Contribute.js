import React from "react";
import classNames from "classnames";
import "./Contribute.css";

import Step1 from "./contribute/Step1";
import Step2 from "./contribute/Step2";
import Step3 from "./contribute/Step3";

import {
  Button
} from 'react-bootstrap';

const Contribute = () => {
  const [step, setStep] = React.useState(1);

  const getStepClassNames = (i) => classNames({
    "is-active text-primary": i === step,
    "is-done text-success": i < step,
    "is-done text-secondary": i > step,
  });

  return (
    <section className="contribute">

      {/* <div className="workflow-steps">
        <span className={getStepClassNames(1)}>Step 1: Intro</span>
        <span className={getStepClassNames(2)}>Step 2: Upload</span>
        <span className={getStepClassNames(3)}>Step 3: Finish</span>
      </div> */}

      {
        {
          1: <Step1 />,
          2: <Step2 />,
          3: <Step3 />
        }[step]
      }

      <div className="workflow-buttons">
        { step === 1 && <Button variant="outline-primary" onClick={() => setStep(2)}>Contribute</Button> }
        { step > 1 && <Button variant="outline-secondary" onClick={() => setStep(step-1)}>Back</Button> }
        { step === 2 && <Button variant="outline-primary" onClick={() => setStep(3)}>Next</Button> }
        { step === 3 && <Button variant="outline-primary" onClick={() => setStep(4)}>Finish</Button> }
      </div>

    </section>
  );
}

export default Contribute;