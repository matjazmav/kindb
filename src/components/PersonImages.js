import React from "react";
import SelfieUploadButton from "./SelfieUploadButton";
import SelfieCaptureButton from "./SelfieCaptureButton";

const PersonImages = ({type, index}) => {
  const [images, setImages] = React.useState([]);

  const onSelfieHandler = (img) => {
    setImages([...images, img]);
  };

  const imageElements = images
    .map(image => <div
      key={image.meta.hash}
      data-image-hash={image.meta.hash}
      style={{
        backgroundImage: `url("${image.src}")`
      }}
      className="image-preview" />);

  return (
    <div>
      <div>
        <span>{type}</span>
        <span>#{index}</span>
      </div>
      <div>{imageElements}</div>
      <div>
        <SelfieUploadButton onSelfie={onSelfieHandler} />
        <SelfieCaptureButton onSelfie={onSelfieHandler} />
      </div>
    </div>
  );
};

export default PersonImages;