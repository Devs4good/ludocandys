import React, { Component } from "react";
import { Link } from "react-router-dom";

import image from "./image.png";
import "./styles.css";

class CustomNavBar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="navbarContainer">
        <div>
          <Link to="/">
            <img className="image" alt="navbar" src={image} />
          </Link>
        </div>

        <div className="buttonsContainer">
          <Link to="/">
            <button>INICIO</button>
          </Link>
          <Link to="/juegos">
            <button>JUEGOS</button>
          </Link>
          <Link to="/login">
            <button>LOGIN</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CustomNavBar;
