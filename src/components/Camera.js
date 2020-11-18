import Webcam from "react-webcam";
import React from 'react';
import "./camera.css";
import faceOutline from "../resources/face-outline.svg"
import * as Icon from 'react-bootstrap-icons';
import md5 from "md5";

const Camera = ({ onCapture }) => {

  const [isReady, setIsReady] = React.useState(false);
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    () => {
      console.log("Capture event...")
      const src = webcamRef.current.getScreenshot();
      const image = new Image();
      image.onload = () => { 
        console.log(`Image captured (${image.width}x${image.height}).`)
        onCapture({
          src: src,
          meta: {
            hash: md5(src),
            width: image.width,
            height: image.height,
          }
        });
      }
      image.src = src;
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
        <img src={faceOutline} />
      </div>
      <div className="cammera-buttons">
        <button><Icon.X /></button>
        <button onClick={capture}><Icon.Camera /></button>
      </div>
    </div>
  );
}

export default Camera;
