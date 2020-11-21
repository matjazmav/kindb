import Webcam from "react-webcam";
import React from 'react';
import Activity from "./Activity";
import "./Camera.scss";
import faceOutline from "../resources/face-outline.svg"
import * as Icon from 'react-bootstrap-icons';
import md5 from "md5";
import * as Utils from "../utils";

const Camera = ({ onCapture, onBack }) => {
  const [isReady, setIsReady] = React.useState(false);
  const webcamRef = React.useRef(null);
  const onCaptureHandler = React.useCallback(
    async () => {
      console.log("Capture event...")
      const src = webcamRef.current.getScreenshot();
      const image = await Utils.base64ToImage(src);
      console.log(`Image captured (${image.width}x${image.height}).`)
      onCapture({
        src: src,
        meta: {
          hash: md5(src),
          width: image.width,
          height: image.height,
        }
      });
    },
    [webcamRef]
  );
  
  const onBackHandler = () => {
    onBack();
  };

  return (
    <div className="camera">
      <Activity isVisible={true}>
        <div className="camera-wrapper">
          <Webcam
            audio={false}
            mirrored={true}
            screenshotFormat="image/png"
            videoConstraints={{
              facingMode: "user",
            }}
            onUserMedia={() => setIsReady(true)}
            ref={webcamRef}
          />
          <img className="face-outline" src={faceOutline} />
        </div>
        { isReady && 
          <Activity.OkButton onClick={onCaptureHandler}><Icon.Camera /></Activity.OkButton>
        }
        <Activity.BackButton onClick={onBackHandler}><Icon.X /></Activity.BackButton>
      </Activity>
    </div>
  );
}

export default Camera;
