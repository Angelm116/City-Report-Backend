import Markers from './Markers.js';
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function App() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDVLGDHEq6xP-cu8ja6gJo5dM37gXUGL8k&v=3.exp"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Markers> </Markers>

      </GoogleMap>
  ) : <></>
}

export default React.memo(App)



// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
// } from 'react-google-maps';

// class App extends React.Component {
//   state = {
//     address: "",
//     city: "",
//     area: "",
//     state: "",
//     zoom: 15,
//     height: 400,
//     mapPosition: {
//       lat: 0,
//       lng: 0,
//     },
//     markerPosition: {
//       lat: 0,
//       lng: 0,
//     }
//   }
//   render() {
//     const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//       <GoogleMap defaultZoom={8} defaultCenter={{ lat: 28.5383, lng: -81.3792 }}>
//         <Markers></Markers>
//       </GoogleMap>
//     ));

//     return (
//       <MapWithAMarker
//         googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVLGDHEq6xP-cu8ja6gJo5dM37gXUGL8k&v=3.exp&libraries=geometry,drawing,places"
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `500px` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     );
//   }
// }

//export default App;



// import React from 'react';
// import Markers from './Markers.js';
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
// } from 'react-google-maps';

// class App extends React.Component {
//   state = {
//     address: "",
//     city: "",
//     area: "",
//     state: "",
//     zoom: 15,
//     height: 400,
//     mapPosition: {
//       lat: 0,
//       lng: 0,
//     },
//     markerPosition: {
//       lat: 0,
//       lng: 0,
//     }
//   }
//   render() {
//     const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//       <GoogleMap defaultZoom={8} defaultCenter={{ lat: 28.5383, lng: -81.3792 }}>
//         <Markers></Markers>
//       </GoogleMap>
//     ));

//     return (
//       <MapWithAMarker
//         googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVLGDHEq6xP-cu8ja6gJo5dM37gXUGL8k&v=3.exp&libraries=geometry,drawing,places"
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `500px` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     );
//   }
// }

// export default App;