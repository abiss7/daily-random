import React, { Component } from 'react';
import './dado.css';

class Dado extends Component {
    
  constructor( props ) {

    //TODO: debo bifurcar si es la imagen del dado o el dado del participante
    super(props);
  }

  render() {

    let html = '';
    if ( !this.props.dadoImg ) {
      html = (<div className="Dado-recuadro">{this.props.valor}</div>);
    }
    else {

      html = (<img src={`${process.env.PUBLIC_URL}/images/logo192.png`} ></img>);
    }

    return (
      html
    );
  }
}

export default Dado;