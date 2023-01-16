import { useState } from "react";
import "./UploadImage.css";
import axios from "axios";

const UploadImage = () => {
  const [images, setImages] = useState([]);
  const [imageToRemove, setImageToRemove] = useState(null);

  const handleRemoveImg = (imgObj) => {
    console.log("soy el objeto de imagen en handleRemoveImg: ", imgObj);
    setImageToRemove(imgObj.public_id);
    axios
      .delete(`http://localhost:3001/nft/${imgObj.public_id}`)
      .then(() => {
        setImageToRemove(null);
        setImages((prev) =>
          prev.filter((img) => img.public_id !== imgObj.public_id)
        );
      })
      .catch((e) => console.log(e));
  };

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
            <img src={image.url} alt="img" />
            {imageToRemove !== image.public_id && (
              <i
                className="fa fa-times-circle close-icon"
                onClick={() => handleRemoveImg(image)}
              ></i>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadImage;
