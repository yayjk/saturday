import React, { Component } from "react";
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from "aws-amplify";
import { Layout } from "../../layout/layout";

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    errors: {
      cognito: null,
      blankfield: false,
    },
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error },
      });
    }

    // AWS Cognito integration here
    try {
      await Auth.signIn(this.state.username, this.state.password);
      // const useableResponse = await user.json();
      // console.log(useableResponse);
      sessionStorage.setItem("login@saturday", true);
      window.location.href = "./upload";
    } catch (error) {
      // let err = null;
      // !error.message ? (err = { message: error }) : (err = error);
      this.setState({
        error: {
          ...this.state.errors,
          cognito: error,
        },
      });
    }
  };

  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    return (
      <Layout>
        <section className="section auth">
          <h1>Log in</h1>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input
                  q
                  className="input"
                  type="text"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter username or email"
                  value={this.state.username}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <a href="/forgotpassword">Forgot password?</a>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">Login</button>
              </p>
            </div>
            {this.state.error && (
              <div className="field">{this.state.error.cognito.message}</div>
            )}
          </form>
        </section>
      </Layout>
    );
  }
}

export default LogIn;
