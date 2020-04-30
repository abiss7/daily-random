import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mapa from './components/map/mapa';
import Dado from './components/dado/dado';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {

  equipo: [],
  //equipo: ['Ariel', 'Nacho', 'Lucas', 'Luciana', 'Claudio', 'Berni', 'Rodo Rulo Rodolf', 'Yo'],
  participante: '',
  nuevo: ''
};

class App extends Component {

  

  constructor(props) {

    super(props);
    this.state = JSON.parse(JSON.stringify(initialState));

    this.tirar = this.tirar.bind(this);
    this.agregar = this.agregar.bind(this);
    this.quitar = this.quitar.bind(this);
    this.reset = this.reset.bind(this);

    this.setNuevo = this.setNuevo.bind(this);
  }

  tirar() {

    const max = this.state.equipo.length;
    const index = Math.round( Math.floor(Math.random() * Math.floor(max)) );
    const participante = this.state.equipo[index];
    const equipo = this.state.equipo.filter(p => p !== participante);

    this.setState({
      equipo,
      participante
    })
  }

  agregar() {

    if ( this.state.nuevo == null ) { return; }
    
    if (!this.state.equipo.find(e => e.toUpperCase() === this.state.nuevo.toUpperCase())) {

      const equipo = this.state.equipo;
      equipo.push(this.state.nuevo);
      
      this.setState({
        equipo,
        nuevo: ''
      });
    }
  }

  quitar() {

    if ( this.state.nuevo == null ) { return; }
    
    let equipo = this.state.equipo;
    equipo = this.state.equipo.filter(e => e.toUpperCase() !== this.state.nuevo.toUpperCase());
    this.setState({
      equipo,
      nuevo: ''
    });
  }

  reset() {
    
    const init = JSON.parse(JSON.stringify(initialState));
    this.setState({

      equipo: init.equipo,
      participante: init.participante,
      nuevo: init.nuevo
    });
  }

  setNuevo(e) {

    const nuevo = e.target.value;
    this.setState({
      nuevo
    });
  }

  render() {

      return (
        <div>
          <div className="row center text-center">            
            { this.state.equipo.length > 0 &&
              this.state.equipo.map(e => {
                return (
                  <div key={Math.random()} className="col-1 m-2">
                    <Dado valor={e} />  
                  </div>
                )
              })
            }
            { this.state.equipo.length === 0 &&
              <h2>Daily!!!</h2>
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
                    <input className="form-control" type="text" value={this.state.nuevo} onChange={ this.setNuevo } placeholder="Participante"></input>
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
            <Dado valor={this.state.participante || 'Daily!!!'} />  
          </div>
          <hr></hr>
          <div className="text-center">
            <button 
              className="btn btn-primary" 
              onClick={ this.tirar }
              disabled={this.state.equipo.length === 0}
              >Tirar</button>             

            {this.state.equipo.length > 0 &&
            
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
