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
<<<<<<< HEAD
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
=======
      <div className='navbarContainer'>
        <div>
          <Link to='/'>
            <img className='image' alt='navbar' src={image} />
          </Link>
        </div>

        <div className='buttonsContainer'>
          <button>
            <Link to='/'>INICIO</Link>
          </button>
          <button>
            <Link to='/juegos'>JUEGOS</Link>
          </button>
          <button>
            <Link to='/login'>LOGIN</Link>
          </button>
>>>>>>> aa11327d6d4ef9957eba060d90fd35a2147fda40
        </div>
      </div>
    );
  }
}

export default CustomNavBar;
