import React, { useState } from "react";
import { cors_bypass, url_1 } from "../../constants/constants";

export const UploadJPG = () => {
  const [file, setFile] = useState();

  const handleImageUplaod = async () => {
    if (file !== undefined) {
      const response = await fetch(cors_bypass + url_1, {
        method: "post",
        headers: { "Content-Type": "image/jpg" },
        body: file,
      });
      const useableresponse = await response.json();
      console.log(useableresponse);
    } else {
      alert("Please choose a valid image and try again");
    }
  };

  const handleImageStore = (e) => {
    var fileName = e.target.value;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile === "jpg" || extFile === "jpeg") {
      setFile(e.target.files[0]);
    } else {
      alert("Only jpg/jpeg files are allowed!");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 my-3">
          <h1 className="text-center">Upload</h1>
          <h3 className="text-center">Choose a jpg file and click on upload</h3>
        </div>
        <div className="col-sm-12 d-flex flex-column">
          <div className="d-flex justify-content-center align-items-center my-2">
            <input
              type="file"
              onChange={handleImageStore.bind(this)}
              accept="image/jpg"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center my-2">
            <button
              type="button"
              className="btn btn-info"
              onClick={handleImageUplaod}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
