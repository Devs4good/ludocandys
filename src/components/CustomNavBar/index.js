import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import image from "./image.png";
import styles from "./styles.css";

class CustomNavBar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="navbar">
          <img className="image" src={image} />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">INICIO</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">JUEGOS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login/">LOGIN</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  };
}

export default CustomNavBar;
