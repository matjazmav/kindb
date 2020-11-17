import React from "react";
import Camera from "./Camera"
import FaceCropper from "./FaceCropper"
import * as Icon from "react-bootstrap-icons"
import "./selfie.css"

const Selfie = ({onSelfie}) => {
  const faceCropperRef = React.useRef();
  const [rawImage, setRawImage] = React.useState(null);
  const [croppedImage, setCroppedImage] = React.useState(null);

  const goBack = () => {
    setRawImage(null);
    setCroppedImage(null);
  }

  const onCrop = () => {
    onSelfie(croppedImage)
  };

  return (
    <div className="selfie">
      { !rawImage && 
        <Camera onCapture={setRawImage} /> }
      { rawImage &&
        <div className="selfie-cropper">
          <FaceCropper image={rawImage} onCrop={setCroppedImage} ref={faceCropperRef} />
          <div className="selfie-cropper-buttons">
            <button className="backBtn" onClick={goBack}><Icon.X /></button>
            <button className="okBtn" onClick={onCrop}><Icon.Check2 /></button>
          </div>
        </div> }
    </div>
  );
};

export default Selfie;