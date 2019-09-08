import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="loginBox">
          <div className="loginContainer">
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
              {/* <button className="btn-close" onClick={() => console.log("aa")}>
              <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>CERRAR</Link>
            </button> */}

              <button className="btn-enter" onClick={() => console.log("aa")}>
                <Link
                  to="/juegos"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  ENTRAR
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
