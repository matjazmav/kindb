import React from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import "./faceCropper.css";
import md5 from "md5";

const FaceCropper = ({image, onCrop}) => {

  const cropperRef = React.useRef(null);
  const [isInitialized, setIsInitialized] = React.useState(false);

  const cropHandler = () => {
    console.log("Initial crop event...");
    cropHandlerHelper();
    cropperRef.current.removeEventListener('crop', cropHandler);
  };

  React.useEffect(() => {
    cropperRef.current.addEventListener('crop', cropHandler);
    return () => {
      cropperRef.current.removeEventListener('crop', cropHandler);
    }
  }, []);

  const cropendHandler = React.useCallback(
    () => {
      cropHandlerHelper();
    },
    [cropperRef]
  );

  const cropHandlerHelper = () => {
    console.log("Cropend event...");
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
    setIsInitialized(true);
  }

  return (
    <div className="face-cropper">
      <Cropper
                src={image.src}
                initialAspectRatio={1}
                guides={false}
                autoCrop={true}
                crop={cropHandler}
                cropend={cropendHandler}
                ref={cropperRef}
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
