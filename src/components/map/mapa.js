import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';

const DEFAULT_VIEWPORT = {
  center: [51.505, -0.09],
  zoom: 13,
};

class Mapa extends Component {

    constructor(props) {

      super(props);
      // Initialize the viewport to the one provided in props
      this.state = {
        viewport: DEFAULT_VIEWPORT,
      }
    }
  
    componentWillReceiveProps({ viewport }) {

      // When the provided viewport changes, apply it
      // if (viewport !== this.props.viewport) {

      //   this.setState({ viewport });
      // }
    }
  
    onClickReset = () => {

      // Reset to position provided in props
      this.setState({ viewport: DEFAULT_VIEWPORT });
    }
  
    onViewportChanged = (viewport) => {

      // The viewport got changed by the user, keep track in state
      this.setState({ viewport });
    }
  
    render() {

      let settings = {
        className: 'markercluster-map mapMarkercluster',
        zoomControl: false,
        maxZoom: 16,
        minZoom: 3
      };

      settings.zoom = 13;
      settings.center = {
        lat: parseFloat(-34.621130653068505),
        lng: parseFloat(-58.42778205871583),
      };

      return (
        <Map {...settings}>
          <React.Fragment>
            <TileLayer
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </React.Fragment>
        </Map>
      )
    }
  } 

  export default Mapa;