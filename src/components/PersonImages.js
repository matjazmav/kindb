import React from "react";
import SelfieUploadButton from "./SelfieUploadButton";
import SelfieCaptureButton from "./SelfieCaptureButton";
import ImagePreview from "./ImagePreview";
import "./PersonImages.scss";

const PersonImages = ({type, index}) => {
  const [images, setImages] = React.useState([]);

  const onSelfieHandler = (img) => {
    setImages([...images, img]);
  };

  const imageElements = images
    .map(image => <ImagePreview key={image.meta.hash} image={image} />);

  return (
    <div className="person-images">
      <div className="type">
        <span>{type}</span>
        { index && <span> #{index}</span> }
      </div>

      <div className="image-collection">{imageElements}</div>

      <div className="controls">
        <SelfieUploadButton onSelfie={onSelfieHandler} style={{ "margin": "10px" }} />
        <SelfieCaptureButton onSelfie={onSelfieHandler} style={{ "margin": "10px" }} />
      </div>

    </div>
  );
};

export default PersonImages;