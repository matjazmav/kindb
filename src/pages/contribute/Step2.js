import md5 from "md5";
import React from "react";
import ImageUploader from "react-images-upload";
import SelfieCapture from "../../components/SelfieCapture";
import SelfieUpload from "../../components/SelfieUpload";
import "./step2.css";

const Step2 = () => {
  return (
    <section>
      <h1>Step 2</h1>
      <PersonRow type="Father" />
      <PersonRow type="Mother" />
      <PersonRow type="Son" index={1} />
    </section>
  );
};

const PersonRow = ({type, index}) => {
  const [images, setImages] = React.useState([]);
  const [isCaptureMode, setIsCaptureMode] = React.useState(false);
  const [isUploadMode, setIsUploadMode] = React.useState(false);

  const captureBtnClkHandler = () => setIsCaptureMode(true);
  const uploadBtnClkHandler = () => setIsUploadMode(true);
  const captureHandler = (img) => {
    setIsCaptureMode(false);
    setImages([...images, img]);
  }
  const uploadHandler = (img) => {
    setIsUploadMode(false);
    setImages([...images, img]);
  }

  const dropHandler = async (imageFiles) => {
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    const newImages = await Promise.all(imageFiles.map(async imageFile => {
      const src = await toBase64(imageFile);
      return {
        src: src,
        meta: {
          hash: md5(src)
        }
      };
    }));
    // const src = URL.createObjectURL(image);
    // const src = await toBase64(image);
    // window.images = image;
    console.log([...images, ...newImages]);
    setImages([...images, ...newImages]);
  }

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
      { isCaptureMode && <SelfieCapture onCapture={captureHandler} />  }
      { isUploadMode && <SelfieUpload onUpload={uploadHandler} />  }
      <div>
        <span>{type}</span>
        <span>#{index}</span>
      </div>
      <div>{imageElements}</div>
      {/* <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={dropHandler}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880} /> */}
      <div>
        <button onClick={uploadBtnClkHandler}>Upload</button>
        <button onClick={captureBtnClkHandler}>Capture</button>
      </div>
    </div>
  );
}

export default Step2;