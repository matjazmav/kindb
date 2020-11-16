import Webcam from "react-webcam";
import React from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const Camera = () => {

  const webcamRef = React.useRef(null);
  const cropperRef = React.useRef(null);

  const [state, setState] = React.useState({
    rawImageSrc: null,
    croppedImageSrc: null
  });

  const capture = React.useCallback(
    () => {
      setState({
        ...state,
        rawImageSrc: webcamRef.current.getScreenshot()
      });
    },
    [webcamRef]
  );

  const crop = React.useCallback(
    () => {
      setState({
        ...state,
        croppedImageSrc: cropperRef.current.getCroppedCanvas().toDataURL()
      });
    },
    [cropperRef]
  );

  const onCropperInit = (cropper) => {
    cropperRef.current = cropper;
  };

  return (
    <div className="image-capture">
      <Webcam
        audio={false}
        mirrored={true}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          facingMode: "user"
        }}
        ref={webcamRef} />
      <button onClick={capture}>Capture photo</button>
      <Cropper
                src={state.rawImageSrc}
                style={{height: 400, width: '100%'}}
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
      <img src={state.croppedImageSrc} />
    </div>
  );
}

export default Camera;
