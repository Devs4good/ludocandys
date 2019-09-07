import React, { Component } from 'react';
import image from './image.png';
import styles from './styles.css';

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
            <div class="navbarContainer">
                <div>
                    <img className="image" src={image} />
                </div>

                <div class="buttonsContainer">
                    <button>INICIO</button>
                    <button>JUEGOS</button>
                    <button>LOGIN</button>
                </div>
            </div>
        );
    }
}

export default CustomNavBar;
