import { useState } from "react";
import "./UploadImage.css";

const UploadImage = () => {
  const [images, setImages] = useState([]);
  const [imageToRemove, setImageToRemove] = useState(null);

  const handleRemoveImg = () => {};

  const handleOpenWidget = async () => {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dumzvr9ih",
        uploadPreset: "fzl9vlnn",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImages((prev) => [
            ...prev,
            { url: result.info.url, public_id: result.info.public_id },
          ]);
        }
      }
    );
    myWidget.open();
  };

  return (
    <div className="upload">
      <button onClick={() => handleOpenWidget()}>UPLOAD Images</button>
      <div className="images-preview-container">
        {images.map((image) => (
          <div className="image-preview">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadImage;
