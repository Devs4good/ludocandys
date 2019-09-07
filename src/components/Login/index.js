import React, { Component } from 'react';
import "./login.css";

class Login extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="login">
        <div className="container">

          <p>LOGIN</p>


          <div>


            <div className="main-container">
              <span>Nombre de usuario </span>
              <input type="text" name="name" />
            </div>
            <div className="main-container">
              <span>Correo </span>
              <input type="text" name="mail" />
            </div>
          </div>


          <div className="button-container">
            <button className="btn-close" onClick={() => console.log("aa")}>
              CERRAR
            </button>
            <button className="btn-enter" onClick={() => console.log("aa")}>
              ENTRAR
            </button>
          </div>
        </div>
      </div>
    );
  }

};

export default Login;