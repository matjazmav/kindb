import React from "react";
import ReactCropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./Cropper.scss";
import md5 from "md5";
import Activity from "./Activity";
import * as Icon from "react-bootstrap-icons";

const Cropper = ({image, onCrop, onBack}) => {
  const cropperRef = React.useRef(null);

  const onCropHandler = () => {
    console.log("Crop event...");
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    const { width, height } = cropper.getCropBoxData();
    const src = cropper.getCroppedCanvas().toDataURL();
    console.log(`Cropped image (${width}x${height}).`)
    onCrop({
      src: src,
      meta: {
        hash: md5(src),
        width: width,
        height: height,
      }
    });
  };

  return (
    <div className="face-cropper">
      <Activity isVisible={true}>
        { image && [
          <ReactCropper
            key="cropper"
            src={image.src}
            initialAspectRatio={1}
            guides={false}
            autoCrop={true}
            ref={cropperRef}
            dragMode="crop"
            movable={false}
            rotatable={false}
            scalable={false}
            zoomable={false}
          />,
          <Activity.OkButton key="ok-btn" onClick={onCropHandler}><Icon.Check2 /></Activity.OkButton>,
          <Activity.BackButton key="back-btn" onClick={onBack}><Icon.X /></Activity.BackButton>
        ]}
      </Activity>
    </div>
  );
};

export default Cropper;
