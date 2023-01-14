import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [nft, setNft] = useState({
    image: "",
    nftName: "",
    clientSecret: "",
    projectId: "",
    email: "",
    name: "",
    description: "",
    traitType: "",
    value: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(`https://nft-api-zcns.onrender.com/nft`, nft);
    console.log(response);
  };

  const handleChange = (e) => {
    setNft({ ...nft, [e.target.name]: e.target.value });
    
  };

  // const handleOpenWidget = async () => {
  //   var myWidget = window.cloudinary.createUploadWidget(
  //     {
  //       cloudName: "dumzvr9ih",
  //       uploadPreset: "fzl9vlnn",
  //     },
  //     (error, result) => {
  //       if (!error && result && result.event === "success") {
  //         setNft({ ...nft, image: result.info.secure_url });
  //       }
  //     }
  //   );
  //   myWidget.open();
  // };

  return (
    <div className="contenedor">
      <h2 className="fw-bold">Create a single NFT</h2>
      <br />
      <br />
      <h3 className="fw-bold">Upload files</h3>
      <br />
      <h5 className="fw-bold">Upload all files you want to mint</h5>
      <br />
      <br />
      <input
              className="form-control mb-3"
              placeholder="Direct link to your NFT image"
              name="image"
              value={nft.image}
              onChange={handleChange}
            ></input>
      <br />
      <br />
      <h3 className="fw-bold">Token details</h3>
      <p>
        The 'Display name' and 'Description' will be show or on marketplaces,
        where the NFT is displayed. The information is also stored on the
        blockchain.
      </p>
      <div className="row">
        <div className="col">
          <form className="mb-4" onSubmit={handleSubmit}>
            <input
              className="form-control mb-3"
              placeholder="Name of the NFT, which is used as an idempotency key"
              name="nftName"
              value={nft.nftName}
              onChange={handleChange}
            ></input>

            <input
              className="form-control mb-3"
              placeholder="x-client-secret"
              name="clientSecret"
              value={nft.clientSecret}
              onChange={handleChange}
            ></input>

            <input
              className="form-control mb-3"
              placeholder="x-project-ID"
              name="projectId"
              value={nft.projectId}
              onChange={handleChange}
            ></input>

            <input
              className="form-control mb-3"
              placeholder="Recipient address in the format of <chain>:<address> or
          email:<email_address>:<chain>."
              name="email"
              value={nft.email}
              onChange={handleChange}
            ></input>

            <input
              className="form-control mb-3"
              placeholder="The name of your NFT (Max length: 32)"
              name="name"
              value={nft.name}
              onChange={handleChange}
            ></input>

            <input
              className="form-control mb-3"
              placeholder="A quick and brief description of your NFT (Max length: 64)"
              name="description"
              value={nft.description}
              onChange={handleChange}
            ></input>

            <input
              className="form-control mb-3"
              placeholder="The name of the trait"
              name="traitType"
              value={nft.traitType}
              onChange={handleChange}
            ></input>

            <input
              className="form-control mb-3"
              placeholder="The value of the trait"
              name="value"
              value={nft.value}
              onChange={handleChange}
            ></input>

            <div className="d-grid gap-2">
              <button className="btn btn-secondary btn-sm" type="submit">
                Create NFT
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <button onClick={() => handleOpenWidget()}>UPLOAD IMAGE</button> */}
    </div>
  );
}

export default App;
