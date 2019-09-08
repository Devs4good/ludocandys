import React, { Component } from 'react';
import "./login.css";
import { Link } from "react-router-dom";


class Login extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="login">
        <div className="loginBox">

          <div className="container">

          <div className="head">
          <span>LOGIN</span>
          <Link to="/">
            <span className="close"> X </span>
          </Link>
          </div>


          <div className="input-box">
            <div className="input-container">
              <span>Nombre de usuario </span>
              <input type="text" name="name" />
            </div>
            <div className="input-container">
              <span>Correo </span>
              <input type="text" name="mail" />
            </div>
          </div>


          <div className="button-container">
            <button className="btn-close" onClick={() => console.log("aa")}>
            <Link to="/">
              CERRAR
              </Link>
            </button>

            <button className="btn-enter" onClick={() => console.log("aa")}>
            <Link to="/juegos">
              ENTRAR
            </Link>
            </button>
          </div>
          </div>
        </div>
      </div>
    );
  }

};

export default Login;