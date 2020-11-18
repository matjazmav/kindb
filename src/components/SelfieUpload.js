import React from "react";
import md5 from "md5";
import FaceCropper from "./FaceCropper"
import * as Icon from "react-bootstrap-icons"
import "./SelfieUpload.css"
import {
  Button
} from 'react-bootstrap';
import * as Utils from "../utils";

const SelfieUpload =  ({onUpload}) => {
  const fileInputRef = React.useRef();
  const [rawImage, setRawImage] = React.useState(null);
  const [croppedImage, setCroppedImage] = React.useState(null);

  const imageUploadedHandler = async (event) => {
    const file = event.target.files[0];
    const src = await Utils.fileToBase64(file);
    const img = await Utils.base64ToImage(src);
    setRawImage({
      src: src,
      meta: {
        hash: md5(src),
        width: img.width,
        height: img.height,
      }
    });
  };

  const backHandler = () => {
    setRawImage(null);
    setCroppedImage(null);
  }

  const cropHandler = () => {
    onUpload(croppedImage)
  };

  return (
    <div className="selfie-upload">
      { !rawImage && <div>
        <Button variant="outline-primary" onClick={() => fileInputRef.current.click()}>Choose File</Button>
        <input type="file" ref={fileInputRef} onChange={imageUploadedHandler} style={{display: "none"}} /> 
      </div> }
      { rawImage &&
        <div className="selfie-cropper">
          <FaceCropper image={rawImage} onCrop={setCroppedImage} />
          <button className="backBtn" onClick={backHandler}><Icon.X /></button>
          <button className="okBtn" onClick={cropHandler}><Icon.Check2 /></button>
        </div> }
    </div>
  );
}

export default SelfieUpload;