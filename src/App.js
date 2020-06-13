import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductAdmin from "./components/ProductAdmin";
import LogIn from "./components/auth/LogIn";
import Upload from "./components/auth/Upload";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import ForgotPasswordVerification from "./components/auth/ForgotPasswordVerification";
import ChangePassword from "./components/auth/ChangePassword";
import ChangePasswordConfirm from "./components/auth/ChangePasswordConfirm";
import Welcome from "./components/auth/Welcome";
// import Footer from "./components/Footer";
import About from "./components/auth/About";
import UploadImage from "./components/auth/UploadImage";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { UploadJPG } from "./components/views/UploadJPG";
import { Search } from "./components/views/Search";

library.add(faEdit);

class App extends Component {
  render() {
    let links = [{ label: "Upload", link: "https://www.netflix.com" }];
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/admin" component={ProductAdmin} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/upload" component={UploadJPG} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/forgotpassword" component={ForgotPassword} />
              <Route
                exact
                path="/forgotpasswordverification"
                component={ForgotPasswordVerification}
              />
              <Route exact path="/changepassword" component={ChangePassword} />
              <Route
                exact
                path="/changepasswordconfirmation"
                component={ChangePasswordConfirm}
              />
              <Route exact path="/welcome" component={Welcome} />
              <Route exact path="/UploadImage" component={UploadImage} />
              <Route path="/about" component={About} />
              <Route path="/search" component={Search} />
            </Switch>
            {/* <Footer /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
