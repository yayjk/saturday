import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export const Layout = (props) => {
  const [isLogIn, setLogInState] = useState(true);
  useEffect(() => {
    const abcd = sessionStorage.getItem("login@saturday");
    if (abcd) {
      setLogInState(true);
    } else {
      setLogInState(false);
    }
  }, []);

  return (
    <>
      <div className="container" style={{ height: "100vh" }}>
        <div className="row">
          <Navbar isLogIn={isLogIn} />
        </div>
        <div className="row">
          {isLogIn ? (
            <>
              <div className="col-sm-3 d-flex flex-column">
                <Link to="/upload" className="m-1">
                  <div>Upload</div>
                </Link>
                <Link to="/search" className="m-1">
                  <div>Search</div>
                </Link>
                <div>
                  <button
                    className="btn btn-link p-0 m-1"
                    onClick={() => {
                      sessionStorage.clear();
                      window.location.href = "./";
                    }}
                  >
                    Signout
                  </button>
                </div>
              </div>
              <div className="col-sm-9">{props.children}</div>
            </>
          ) : (
            <div className="col-sm-12">{props.children}</div>
          )}
        </div>
      </div>
    </>
  );
};
