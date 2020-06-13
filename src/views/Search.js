import React, { useState } from "react";
import { cors_bypass } from "../constants/constants";
import { Layout } from "../layout/layout";

export const Search = (e) => {
  const [tagsArray, changeTagsArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [responseFromLambda, setResponsefromLambda] = useState([]);

  const storeTags = (e) => {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
      //Enter keycode
      e.preventDefault();
      if (e.target.value !== "") {
        let canAdd = true;
        const tagsArrayCopy = [...tagsArray];
        tagsArrayCopy.forEach((tag) => {
          if (tag === e.target.value) {
            canAdd = false;
          }
        });

        if (canAdd) {
          tagsArrayCopy.push(e.target.value);
          changeTagsArray(tagsArrayCopy);
          e.target.value = "";
        } else {
          e.target.value = "";
        }
      }
    }
  };

  const storeTagsViaButton = () => {
    const element = document.getElementById("search_term");
    if (element.value !== "") {
      let canAdd = true;
      const tagsArrayCopy = [...tagsArray];
      tagsArrayCopy.forEach((tag) => {
        if (tag === element.value) {
          canAdd = false;
        }
      });

      if (canAdd) {
        tagsArrayCopy.push(element.value);
        changeTagsArray(tagsArrayCopy);
        element.value = "";
      } else {
        element.value = "";
      }
    }
  };

  const testApi = async () => {
    setLoading(true);
    const to_send = {
      tags: tagsArray,
    };
    const response = await fetch(
      cors_bypass +
        "https://c8w859v26e.execute-api.us-east-1.amazonaws.com/test1/query",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(to_send),
      }
    );

    const useableresponse = await response.json();
    changeTagsArray([]);

    if (useableresponse.links !== undefined) {
      setResponsefromLambda(useableresponse.links);
    } else {
      setResponsefromLambda([useableresponse]);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-sm-12 my-2">
          <input
            className="form-control"
            type="text"
            onKeyPress={storeTags.bind(this)}
            id="search_term"
            placeholder="Add your tags..."
          />
        </div>

        <div className="d-flex col=sm-12 my-2">
          {tagsArray.map((tag) => (
            <span key={tag} className="rounded bg-success p-2 mx-2 flex-wrap">
              {tag}
            </span>
          ))}
        </div>

        <div className="col-sm-12 my-2 d-flex justify-content-center">
          <button
            className="btn btn-secondary mx-2"
            onClick={() => changeTagsArray([])}
          >
            Reset
          </button>
          <button
            className="btn btn-secondary mx-2"
            onClick={storeTagsViaButton}
          >
            Add
          </button>
          <button className="btn btn-info" onClick={testApi}>
            {loading ? (
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Show results"
            )}
          </button>
        </div>
        <div className="col-sm-12 flex-column">
          {responseFromLambda.map((link) => (
            <div key={link}>{link}</div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
