import React, { Component } from 'react';
import "./letra.css";

class Letra extends Component {
  constructor(props){
    super(props);
    this.state = {
      tipoDeLetra: "letra",
    }
  }

  render(){ 
    return(
      <div className={this.state.tipoDeLetra + ' notranslate'} key={this.props.letra}
          onClick={() => {
              this.props.funcion(this.props.letra);
              this.setState({tipoDeLetra: this.props.letra === this.props.ganadora? "letraVerde": "letraRoja"});
            } 
          }>
          {this.props.letra}
      </div>
    );
  }
}

export default Letra;