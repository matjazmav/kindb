import React from "react";
import Camera from "./Camera"
import FaceCropper from "./FaceCropper"
import * as Icon from "react-bootstrap-icons"
import "./selfie.css"

const Selfie = () => {
  const [rawImage, setRawImage] = React.useState(null);

  const goBack = () => setRawImage(null);

  return (
    <div className="selfie">
      { !rawImage
        ? <Camera onCapture={setRawImage} />
        : (
          <div className="selfie-cropper">
            <FaceCropper image={rawImage} />
            <div className="selfie-cropper-buttons">
              <button className="backBtn" onClick={goBack}><Icon.ArrowLeft /></button>
              <button className="okBtn"><Icon.Check2 /></button>
            </div>
          </div>
        ) }
      
    </div>
  );
};

export default Selfie;