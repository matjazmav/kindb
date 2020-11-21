import React from "react";
import Activity from "./Activity";
import * as Icon from "react-bootstrap-icons";
import "./ImagePreview.scss";

const ImagePreview = ({ image }) => {

  const [isPreviewOpened, setIsPreviewOpened] =  React.useState(false);

  const openPreviewHandler = () => {
    setIsPreviewOpened(true);
  };

  const closePreviewHandler = () => {
    setIsPreviewOpened(false);
  }

  return (
    <div className="image-preview">
      <div 
        className="image-thumbnail"
        onClick={openPreviewHandler}
        style={{
          backgroundImage: `url("${image.src}")`
        }}
      />
      { isPreviewOpened &&
        <Activity isVisible={true}>
          <img className="full-image" src={image.src} alt="Image Preview" onClick={closePreviewHandler}/>
          <Activity.BackButton onClick={closePreviewHandler}><Icon.X /></Activity.BackButton>
        </Activity>
      }
    </div>
  );
};

export default ImagePreview;