import React from "react";

export default function Navbar({ isLogIn }) {
  return (
    <div className="col-sm-12">
      <nav
        className="navbar p-0 w-100"
        role="navigation"
        aria-label="main navigation"
      >
        <div
          className="navbar-brand"
          onClick={() =>
            isLogIn
              ? (window.location.href = "/upload")
              : (window.location.href = "/")
          }
        >
          <div className="navbar-item">
            <img
              src="hexal-logo.png"
              width="112"
              height="28"
              alt="hexal logo"
            />
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {/* <a href="/Upload" className="navbar-item">
            Upload
          </a>
          <a href="/search" className="navbar-item">
            Query
          </a>
          <a href="/" className="navbar-item">
            Sign Out
          </a> */}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {!isLogIn && (
                <div className="buttons">
                  <a href="/register" className="button is-primary">
                    <strong>Register</strong>
                  </a>
                  <a href="/" className="button is-light">
                    Log in
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
