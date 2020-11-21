import React from "react";
import md5 from "md5";
import Cropper from "./Cropper";
import Camera from "./Camera";
import {
  Button
} from 'react-bootstrap';

const SelfieCaptureButton =  ({onSelfie}) => {
  const [rawImage, setRawImage] = React.useState(null);
  const [mode, setMode] = React.useState(null);

  const onImageCaptureRequested = () => {
    setMode("camera");
  };

  const onCaptureHandler = (img) => {
    setRawImage(img);
    setMode("cropper");
  }

  const onBackHandler = () => {
    switch(mode) {
      case "camera":
        setMode(null);
        break;
      case "cropper":
        setMode("camera");
        break;
    }
    setRawImage(null);
  };

  const onCropHandler = (img) => {
    onSelfie(img);
    setMode(null);
    setRawImage(null);
  };

  return (
    <span className="selfie-capture-button">
      <Button onClick={onImageCaptureRequested}>Capture</Button>
      { mode === "camera" && 
        <Camera onCapture={onCaptureHandler} onBack={onBackHandler} />
      }
      { mode === "cropper" && 
        <Cropper
          image={rawImage}
          onCrop={onCropHandler}
          onBack={onBackHandler}
        />
      }
    </span>
  );
}

export default SelfieCaptureButton;