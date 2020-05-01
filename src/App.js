import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mapa from './components/map/mapa';
import Dado from './components/dado/dado';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/animated.css';

const initialState = {

  equipo: [],
  participante: '',
  imagenDado: true
};

class App extends Component {

  

  constructor(props) {

    super(props);
    this.state = JSON.parse(JSON.stringify(initialState));

    this.tirar = this.tirar.bind(this);
    this.agregar = this.agregar.bind(this);
    this.quitar = this.quitar.bind(this);
    this.reset = this.reset.bind(this);
  }

  tirar() {

    const max = this.state.equipo.length;
    const index = Math.round( Math.floor(Math.random() * Math.floor(max)) );
    const participante = this.state.equipo[index];
    const equipo = this.state.equipo.filter(p => p !== participante);

    this.setState({
      equipo,
      participante,
      imagenDado: false
    })
  }

  agregar() {

    const nuevo = document.getElementById('txtParticipante');
    if ( nuevo.value == '') { return; }
    
    if (!this.state.equipo.find(e => e.toUpperCase() === nuevo.value.toUpperCase())) {

      const equipo = this.state.equipo;
      equipo.push(nuevo.value);
      
      nuevo.value = '';
      this.setState({
        equipo
      });
    }
  }

  quitar() {

    const nuevo = document.getElementById('txtParticipante');
    if ( nuevo.value == '') { return; }
    
    let equipo = this.state.equipo;
    equipo = this.state.equipo.filter(e => e.toUpperCase() !== nuevo.value.toUpperCase());

    nuevo.value = '';
    this.setState({
      equipo
    });
  }

  reset() {
    
    const init = JSON.parse(JSON.stringify(initialState));
    this.setState({

      equipo: init.equipo,
      participante: init.participante,
      nuevo: init.nuevo,
      imagenDado: init.imagenDado
    });
  }

  render() {

      return (
        <div>
          <div className="row center text-center">            
            { this.state.equipo.length > 0 &&
              this.state.equipo.map(e => {
                return (
                  <div key={Math.random()} className="col-1 m-2 animated bounceIn">
                    <Dado valor={e} />  
                  </div>
                )
              })
            }
            { this.state.equipo.length === 0 &&
              <h2 className="m-5 animated swing">Daily!!!</h2>
            }
          </div>

          <div className="row center">
            <div className="col-6">
              <div className="form-group mb-2">
                <div className="row center">
                  <div className="col-2">
                    <button className="btn btn-primary" onClick={ this.quitar }>-</button>
                  </div>
                  <div className="col-4">
                    <input id="txtParticipante" className="form-control" type="text" placeholder="Participante"></input>
                  </div>
                  <div className="col-2">
                    <button className="btn btn-primary" onClick={ this.agregar }>+</button>                    
                  </div>
                </div>
              </div>            
            </div>
          </div>

          <hr></hr>
          <div className="row center">
            <Dado valor={this.state.participante} dadoImg={this.state.imagenDado}/>  
          </div>
          <hr></hr>
          <div className="text-center">
            <button 
              className="btn btn-primary" 
              onClick={ this.tirar }
              disabled={this.state.equipo.length === 0}
              >Tirar</button>             

            {this.state.equipo.length === 0 &&
            
            <button 
              className="btn btn-primary m-2" 
              onClick={ this.reset }>Reset</button>             
            }
          </div>
        </div>
      );
  }
}

export default App;
