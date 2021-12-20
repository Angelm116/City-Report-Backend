import React from 'react';
import Markers from './Markers.js';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps';

function Map2(props) {
    
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 28.5383, lng: -81.3792 }}>
      <Markers reports={props.reports}></Markers>
    </GoogleMap>
  ));
 
    return (
        <MapWithAMarker
            reports={props.reports}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVLGDHEq6xP-cu8ja6gJo5dM37gXUGL8k&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `93vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    );
}

export default Map2;