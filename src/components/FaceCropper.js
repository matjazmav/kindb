import Webcam from "react-webcam";
import React from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import * as faceapi from 'face-api.js';
import "./faceCropper.css"

const FaceCropper = ({image}) => {

  const cropperRef = React.useRef(null);

  const crop = React.useCallback(
    () => {
      
    },
    [cropperRef]
  );

  const onCropperInit = (cropper) => {
    cropperRef.current = cropper;
  };

  return (
    <div className="face-cropper">
      <Cropper
                src={image.src}
                style={{height: image.meta.height, width: image.meta.width}}
                initialAspectRatio={1}
                guides={false}
                crop={crop}
                onInitialized={onCropperInit}
                dragMode="crop"
                movable={false}
                rotatable={false}
                scalable={false}
                zoomable={false}
            />
    </div>
  );
}

export default FaceCropper;
