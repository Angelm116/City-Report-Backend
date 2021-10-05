import React from 'react';
import Markers from './Markers.js';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps';

class App extends React.Component {
  state = {
    address: "",
    city: "",
    area: "",
    state: "",
    zoom: 15,
    height: 400,
    mapPosition: {
      lat: 0,
      lng: 0,
    },
    markerPosition: {
      lat: 0,
      lng: 0,
    }
  }
  render() {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 28.5383, lng: -81.3792 }}>
        <Markers></Markers>
      </GoogleMap>
    ));

    return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVLGDHEq6xP-cu8ja6gJo5dM37gXUGL8k&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default App;