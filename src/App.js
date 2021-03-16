import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mapa from './components/map/mapa';
import Dado from './components/dado/dado';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/animated.css';

const initialState = {

  equipo: [],
  comentarios: [],
  participante: '',
  comentarioParticipante: '',
  imagenDado: true,
  showTxtComentarios: false,
  modoComentario: false
};

class App extends Component {



  constructor(props) {

    super(props);
    this.state = JSON.parse(JSON.stringify(initialState));

    this.tirar = this.tirar.bind(this);
    this.agregar = this.agregar.bind(this);
    this.quitar = this.quitar.bind(this);
    this.reset = this.reset.bind(this);
    this.showComentarios = this.showComentarios.bind(this);
    this.setModo = this.setModo.bind(this);
  }

  tirar() {

    const max = this.state.equipo.length;
    const index = Math.round(Math.floor(Math.random() * Math.floor(max)));
    const participante = this.state.equipo[index];
    const comentarioParticipante = this.state.comentarios[index];

    const equipo = this.state.equipo.filter(p => p !== participante);
    const comentarios = this.state.comentarios.filter((c, i) => i !== index);

    console.log(comentarios);

    this.setState({
      equipo,
      participante,
      comentarioParticipante,
      comentarios,
      imagenDado: false
    })
  }

  agregar() {

    const nuevo = document.getElementById('txtParticipante');
    if (nuevo.value == '') { return; }

    const comentarioNuevo = document.getElementById('txtComentarios');

    if (!this.state.equipo.find(e => e.toUpperCase() === nuevo.value.toUpperCase())) {

      const equipo = this.state.equipo;
      equipo.push(nuevo.value);

      const comentarios = this.state.comentarios;
      if (comentarioNuevo) {

        comentarios.push(comentarioNuevo.value && comentarioNuevo.value.trim() !== '' ? comentarioNuevo.value.trim() : '');
        comentarioNuevo.value = '';
      }

      nuevo.value = '';

      this.setState({
        equipo,
        comentarios
      });
    }
  }

  quitar() {

    const nuevo = document.getElementById('txtParticipante');
    const comentariosEdit = document.getElementById('txtComentarios');
    if (nuevo.value == '') { return; }

    let equipo = this.state.equipo;
    let index = 0;
    equipo = this.state.equipo.filter((e, i) => {

      if (e.toUpperCase() === nuevo.value.toUpperCase()) {

        index = i;
        return false;
      }

      return true;
    });

    let { comentarios } = this.state;
    if (comentarios.length > 0) {

      comentarios = comentarios.filter((c, i) => i !== index);
    }

    nuevo.value = '';
    comentariosEdit.value = '';
    this.setState({
      equipo,
      comentarios
    });
  }

  reset() {

    const init = JSON.parse(JSON.stringify(initialState));
    this.setState({

      ...init
    });
  }

  showComentarios({ target }) {

    this.setState({
      showTxtComentarios: target.checked
    });
  }

  setModo({ target }) {

    this.setState({
      modoComentario: target.checked
    });
  }

  render() {

    return (
      <div>

        <div className="row left ml-5 mt-2">
          <div>
            <div className="custom-control custom-checkbox">
              <input style={{cursor: 'pointer'}} type="checkbox" className="custom-control-input" id="customCheck1" checked={this.state.showTxtComentarios} onChange={this.showComentarios} />
              <label style={{cursor: 'pointer'}} className="custom-control-label" for="customCheck1">Cargar comentarios</label>
            </div>
            <div className="custom-control custom-checkbox mt-2" style={{cursor: 'pointer'}}>
              <input style={{cursor: 'pointer'}} type="checkbox" className="custom-control-input" id="customCheck2" checked={this.state.modoComentario} onChange={this.setModo} />
              <label style={{cursor: 'pointer'}} className="custom-control-label" for="customCheck2">Modo incógnito</label>
            </div>
          </div>
        </div>

        <div className="row center text-center">
          {this.state.equipo.length > 0 && !this.state.modoComentario &&
            this.state.equipo.map(e => {
              return (
                <div key={Math.random()} className="col-1 m-2 animated bounceIn">
                  <Dado valor={e} />
                </div>
              )
            })
          }
          {this.state.equipo.length === 0 &&
            <h2 className="m-5 animated swing">Daily!!!</h2>
          }
        </div>

        <div className="row center">
          <div className="col-6">
            <div className="form-group mb-2">
              {
                !this.state.showTxtComentarios &&
                <div className="row center mt-5">
                  <div className="col-2">
                    <button className="btn btn-primary" onClick={this.quitar}>-</button>
                  </div>
                  <div className="col-4">
                    <input id="txtParticipante" className="form-control" type="text" placeholder="Participante"></input>
                  </div>
                  <div className="col-2">
                    <button className="btn btn-primary" onClick={this.agregar}>+</button>
                  </div>
                </div>
              }
              {
                this.state.showTxtComentarios &&
                <>
                  <div className="row center mt-5">
                    <div className="col-4">
                      <input id="txtParticipante" className="form-control" type="text" placeholder="Participante"></input>
                    </div>
                  </div>
                  <div className="row center mt-5">
                    <div className="col-2">
                      <button className="btn btn-primary" onClick={this.quitar}>-</button>
                    </div>
                    <div className="col-8">
                      <input id="txtComentarios" className="form-control" type="text" placeholder="Comentarios"></input>
                    </div>
                    <div className="col-2">
                      <button className="btn btn-primary" onClick={this.agregar}>+</button>
                    </div>
                  </div>
                </>
              }
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="row center">
          {
            !this.state.modoComentario &&
            <Dado valor={this.state.participante} dadoImg={this.state.imagenDado} />
          }
          {
            this.state.participante !== '' && this.state.modoComentario &&
            <div class="alert alert-dismissible alert-info" style={{fontSize: '20px'}}>
              <strong>{this.state.comentarioParticipante !== undefined ? this.state.comentarioParticipante : 'No hay comentario para este participante'}</strong>
            </div>
          }
        </div>
        <hr></hr>
        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={this.tirar}
            disabled={this.state.equipo.length === 0}
          >Tirar</button>

          {this.state.equipo.length === 0 &&

            <button
              className="btn btn-primary m-2"
              onClick={this.reset}>Reset</button>
          }
        </div>
      </div>
    );
  }
}

export default App;
