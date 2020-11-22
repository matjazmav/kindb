import React from "react";
import "./Contribute.scss";

import Step1 from "./contribute/Step1";
import Step2 from "./contribute/Step2";
import Step3 from "./contribute/Step3";
import Step4 from "./contribute/Step4";

const Contribute = () => {
  const [step, setStep] = React.useState(1);

  const onFinishHandler = () => {
    // TODO - Upload images
    setStep(4);
  };

  return (
    <section className="contribute">
      {
        {
          1: <Step1 onNext={() => setStep(2)} />,
          2: <Step2 onNext={() => setStep(3)} onBack={() => setStep(1)} />,
          3: <Step3 onNext={onFinishHandler} onBack={() => setStep(2)} />,
          4: <Step4 onNext={() => setStep(1)} />,
        }[step]
      }
    </section>
  );
}

export default Contribute;