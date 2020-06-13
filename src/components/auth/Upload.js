import React, { Component } from 'react';
import './Upload.css';

  class Upload extends Component {
    render() {
      return (
          <div className="container center">
            <nav className="menu">
            <p>Click on "Browse" button to select a file from you desktop, and then select "Upload Image" button </p>

        
                <div className="menu__right">
                    <ul className="menu__list">
                        <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Upload</a></li>
                        <li className="menu__list-item"><a className="menu__link" href="#">Find Image</a></li>
                        <li className="menu__list-item"><a className="menu__link" href="#">Query result</a></li>
                        <li className="menu__list-item"><a className="menu__link" href="#">Signout</a></li>
                    </ul>

                    <button className="menu__search-button"></button>

                    <form className="menu__search-form hide" method="POST">
                        <input className="menu__search-input" placeholder="Type and hit enter" />
                    </form>
                </div>
            </nav>
        </div>
        );
    }
  }


export default Upload;
