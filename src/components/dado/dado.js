import React, { Component } from 'react';
import './dado.css';

class Dado extends Component {
    
  constructor( props ) {

    //TODO: debo bifurcar si es la imagen del dado o el dado del participante
    super(props);
  }

  render() {
    return (
     
      // <div className="Dado-recuadro">{this.props.valor}</div>
      <img src={`${process.env.PUBLIC_URL}/images/logo192.png`} ></img>
    );
  }
}

export default Dado;