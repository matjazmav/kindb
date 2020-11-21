import React from "react";
import md5 from "md5";
import Cropper from "./Cropper";
import {
  Button
} from 'react-bootstrap';
import * as Utils from "../utils";

const SelfieUploadButton =  ({onSelfie}) => {
  const fileInputRef = React.useRef();
  const [rawImage, setRawImage] = React.useState(null);
  const [isCropperMode, setIsCropperMode] = React.useState(false);

  const onImageUploadRequested = () => {
    setIsCropperMode(true);
    fileInputRef.current.click();
  }

  const onImageUploadedHandler = async (event) => {
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

  const onBackHandler = () => {
    cleanup();
  };

  const onCropHandler = (croppedImage) => {
    onSelfie(croppedImage);
    cleanup();
  };

  const cleanup = () => {
    fileInputRef.current.value = null;
    setIsCropperMode(false);
    setRawImage(null);
  };

  const setOnBodyFocusHandler = () => {
    document.body.onfocus = onBodyFocusHandler;
  };

  const onBodyFocusHandler = () => {
    document.body.onfocus = null;
    // HACK - close loading screan if cancel button is clicked
    setTimeout(() => {
      if(fileInputRef.current.value) return;
      cleanup();
    }, 500);
  };

  return (
    <span className="selfie-upload-button">
      <Button onClick={onImageUploadRequested}>Upload</Button>
      <input 
        type="file"
        accept="image/png, image/jpeg"
        capture="user"
        ref={fileInputRef}
        onChange={onImageUploadedHandler}
        onClick={setOnBodyFocusHandler}
        style={{
          "display": "none"
        }}
      />
      { isCropperMode && 
        <Cropper
          image={rawImage}
          onCrop={onCropHandler}
          onBack={onBackHandler}
        />
      }
    </span>
  );
}

export default SelfieUploadButton;