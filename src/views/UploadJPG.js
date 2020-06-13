import React, { useState } from "react";
import { cors_bypass, url_1 } from "../constants/constants";
import { Layout } from "../layout/layout";

export const UploadJPG = () => {
  const [file, setFile] = useState();
  const [done, setDone] = useState(false);
  const [loading, setloading] = useState(false);

  const handleImageUplaod = async () => {
    if (file !== undefined) {
      setloading(true);
      const response = await fetch(cors_bypass + url_1, {
        method: "post",
        headers: { "Content-Type": "image/jpg" },
        body: file,
      });
      const useableresponse = await response.json();
      if (useableresponse.statusCode === 200) {
        setDone(true);
      }
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
    <Layout>
      <div className="row">
        <div className="col-sm-12 my-3">
          <h1>Upload</h1>
          <h3>Choose a jpg file and click on upload</h3>
        </div>
        <div className="col-sm-12 d-flex flex-column">
          <div className="d-flex align-items-center my-2">
            <input
              type="file"
              onChange={handleImageStore.bind(this)}
              accept="image/jpg"
            />
          </div>
          <div className="d-flex align-items-center my-2">
            <button
              type="button"
              className="btn btn-info"
              onClick={handleImageUplaod}
            >
              {loading ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Upload"
              )}
            </button>
          </div>
          {done && <div>Uploaded successfully</div>}
        </div>
      </div>
    </Layout>
  );
};
