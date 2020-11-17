import Webcam from "react-webcam";
import React from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import * as faceapi from 'face-api.js';

const Camera = () => {

  const webcamRef = React.useRef(null);
  const rawImageRef = React.useRef(null);
  const cropperRef = React.useRef(null);

  const [isModelLoaded, setModelLoaded] = React.useState(false);
  const [rawImageSrc, setRawImageSrc] = React.useState(null);
  const [croppedImageSrc, setCroppedImageSrc] = React.useState(null);
  const [detection, setDetection] = React.useState(null);

  const capture = React.useCallback(
    () => {
      setRawImageSrc(webcamRef.current.getScreenshot());
    },
    [webcamRef]
  );

  const crop = React.useCallback(
    () => {
      setCroppedImageSrc(cropperRef.current.getCroppedCanvas().toDataURL());
    },
    [cropperRef]
  );

  const onCropperInit = (cropper) => {
    cropperRef.current = cropper;
  };

  React.useEffect(() => {
    if (isModelLoaded) return;
    faceapi.loadSsdMobilenetv1Model(process.env.PUBLIC_URL + '/models')
      .then(() => {
        console.log("loaded");
        setModelLoaded(true);
      })
      .catch((e) => {
        console.log("error loading");
        console.log(e);
      });
  }, []);

  React.useEffect(() => {
    if (!isModelLoaded) return;
    console.log("detecting...")
    faceapi.detectSingleFace(document.getElementById("rawImageSrc"))
      .then((d) => {
        console.log(d);
        setDetection({
          left: d.box.left,
          top: d.box.top,
          width: d.box.width,
          height: d.box.height,
        });
      })
      .catch((e) => {
        console.log("error detecting");
        console.log(e);
      });
  }, [rawImageSrc]);

  React.useEffect(() => {
    if(!detection) return;
    cropperRef.current.setCropBoxData({
      ...detection,
      height: detection.height*1.5,
      top: Math.max(0, detection.top-(detection.height*0.5))
    });
  }, [cropperRef, detection]);

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
      <img src={rawImageSrc} id="rawImageSrc"/>
      <Cropper
                src={rawImageSrc}
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
      <img src={croppedImageSrc} />
      <pre><code>{JSON.stringify(detection)}</code></pre>
    </div>
  );
}

export default Camera;
