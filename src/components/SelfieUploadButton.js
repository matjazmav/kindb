import React from "react";
import md5 from "md5";
import Cropper from "./Cropper";
import * as Icon from "react-bootstrap-icons";
import {
  Button
} from 'react-bootstrap';
import * as Utils from "../utils";

const SelfieUploadButton =  ({onSelfie}) => {
  const fileInputRef = React.useRef();
  const [rawImage, setRawImage] = React.useState(null);

  const onImageUploadRequested = () => {
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
    setRawImage(null);
  };

  return (
    <span className="selfie-upload-button">
      <Button onClick={onImageUploadRequested} size="sm" variant="outline-primary"><Icon.Upload /></Button>
      <input 
        type="file"
        accept="image/png, image/jpeg"
        capture="user"
        ref={fileInputRef}
        onChange={onImageUploadedHandler}
        style={{
          "display": "none"
        }}
      />
      { rawImage && 
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