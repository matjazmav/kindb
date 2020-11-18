import React from "react";
import Camera from "./Camera"
import FaceCropper from "./FaceCropper"
import * as Icon from "react-bootstrap-icons"
import "./SelfieCapture.css"

const SelfieCapture = ({onCapture}) => {
  const [rawImage, setRawImage] = React.useState(null);
  const [croppedImage, setCroppedImage] = React.useState(null);

  const backHandler = () => {
    setRawImage(null);
    setCroppedImage(null);
  }

  const cropHandler = () => {
    onCapture(croppedImage)
  };

  return (
    <div className="selfie-capture">
      { !rawImage && 
        <Camera onCapture={setRawImage} /> }
      { rawImage &&
        <div className="selfie-cropper">
          <FaceCropper image={rawImage} onCrop={setCroppedImage} />
          <button className="backBtn" onClick={backHandler}><Icon.X /></button>
          <button className="okBtn" onClick={cropHandler}><Icon.Check2 /></button>
        </div> }
    </div>
  );
};

export default SelfieCapture;