import { useState } from "react";
import "./UploadImage.css";

const UploadImage = () => {
//   const [images, setImages] = useState([]);
//   // const [imageToRemove, setImageToRemove] = useState(null);

//   // const handleRemoveImg = () => {};

//   const handleOpenWidget = async () => {
//     var myWidget = window.cloudinary.createUploadWidget(
//       {
//         cloudName: "dumzvr9ih",
//         uploadPreset: "fzl9vlnn",
//       },
//       (error, result) => {
//         if (!error && result && result.event === "success") {
//           console.log(result.info)
//           setImages(result.info.secure_url)
//         }
//       }
//     );
//     myWidget.open()
//   };

  return (
    <div className="upload">
      <button onClick={() => handleOpenWidget()}>UPLOAD Images</button>
    </div>
  );
};

export default UploadImage;
