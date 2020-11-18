import React from "react";
import SelfieCapture from "./SelfieCapture";
import SelfieUpload from "./SelfieUpload";

const PersonImages = ({type, index}) => {
  const [images, setImages] = React.useState([]);
  const [isCaptureMode, setIsCaptureMode] = React.useState(false);
  const [isUploadMode, setIsUploadMode] = React.useState(false);

  const captureBtnClkHandler = () => setIsCaptureMode(true);
  const uploadBtnClkHandler = () => setIsUploadMode(true);
  const captureHandler = (img) => {
    setIsCaptureMode(false);
    setImages([...images, img]);
  }
  const uploadHandler = (img) => {
    setIsUploadMode(false);
    setImages([...images, img]);
  }

  const imageElements = images
    .map(image => <div
      key={image.meta.hash}
      data-image-hash={image.meta.hash}
      style={{
        backgroundImage: `url("${image.src}")`
      }}
      className="image-preview" />);

  return (
    <div>
      { isCaptureMode && <SelfieCapture onCapture={captureHandler} />  }
      { isUploadMode && <SelfieUpload onUpload={uploadHandler} />  }
      <div>
        <span>{type}</span>
        <span>#{index}</span>
      </div>
      <div>{imageElements}</div>
      <div>
        <button onClick={uploadBtnClkHandler}>Upload</button>
        <button onClick={captureBtnClkHandler}>Capture</button>
      </div>
    </div>
  );
};

export default PersonImages;