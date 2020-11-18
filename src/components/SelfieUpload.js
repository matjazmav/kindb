import React from "react";
import md5 from "md5";
import FaceCropper from "./FaceCropper"
import * as Icon from "react-bootstrap-icons"
import "./SelfieUpload.css"

const SelfieUpload =  ({onUpload}) => {
  const rawImageRef = React.useRef();
  const [rawImage, setRawImage] = React.useState(null);
  const [croppedImage, setCroppedImage] = React.useState(null);

  const imageUploadedHandler = async (event) => {
    const file = event.target.files[0];
    const toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
    const toImage = base64 => new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = error => reject(error);
      image.src = base64;
    });
    const src = await toBase64(file);
    const img = await toImage(src);
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
      { !rawImage && 
        <input type="file" ref={rawImageRef} onChange={imageUploadedHandler} /> }
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