import React from "react";
import Selfie from "../../components/Selfie";
import "./step2.css";

const Step2 = () => {
  return (
    <section>
      <h1>Step 2</h1>
      <PersonRow type="Father" />
      <PersonRow type="Mother" />
      <PersonRow type="Son" index={1} />
    </section>
  );
};

const PersonRow = ({type, index}) => {
  const [imageSources, setImageSources] = React.useState([]);
  const [isCaptureMode, setIsCaptureMode] = React.useState(false);

  const onCaptureRequested = () => setIsCaptureMode(true);
  const onCaptureExited = (img) => {
    setIsCaptureMode(false);
    setImageSources([...imageSources, img]);
  }

  const images = imageSources.map(imgSrc => <img className="image-preview" src={imgSrc} />);

  return (
    <div>
      { isCaptureMode && <Selfie onSelfie={onCaptureExited} />  }
      <div>
        <span>{type}</span>
        <span>#{index}</span>
      </div>
      <div>{images}</div>
      <div>
        <button>Upload</button>
        <button onClick={onCaptureRequested}>Capture</button>
      </div>
    </div>
  );
}

export default Step2;