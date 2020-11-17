import Webcam from "react-webcam";
import React from 'react';
import "./camera.css";
import faceOutline from "../resources/face-outline.svg"
import * as Icon from 'react-bootstrap-icons';

const Camera = ({ onCapture }) => {

  const [isReady, setIsReady] = React.useState(false);
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    () => {
      const imgSrc = webcamRef.current.getScreenshot();
      const image = new Image();
      image.onload = () => { 
        console.log(`Image captured (${image.width}x${image.height}).`)
        onCapture({
          src: imgSrc,
          meta: {
            width: image.width,
            height: image.height,
          }
        });
      }
      image.src = imgSrc;
    },
    [webcamRef]
  );
  
  return (
    <div className="camera">
      <div className="camera-loader" style={{display: !isReady ? "block" : "none"}}>
        <Icon.HourglassSplit  /><br/>
        <span>Opening camera...</span>
      </div>
      <div className="camera-view" style={{display: isReady ? "block" : "none"}}>
        <Webcam
          audio={false}
          mirrored={true}
          screenshotFormat="image/png"
          videoConstraints={{
            facingMode: "user",
            // width: { ideal: 4096 },
            // height: { ideal: 2160 }
          }}
          onUserMedia={() => setIsReady(true)}
          ref={webcamRef} />
        <button onClick={capture}><Icon.Camera /></button>
        <img src={faceOutline} />
      </div>
    </div>
  );
}

export default Camera;
