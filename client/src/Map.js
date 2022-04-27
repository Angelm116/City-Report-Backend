import React,  { useState }  from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
} from 'react-google-maps';


function Map(props) {
    
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

// Markers is in charge of rendering markers in the map
// It takes a list of reports as a prop
function Markers(props) {
    
    return (
        <div>
            <div className="reports-container">
                {props.reports.map((report, key) => {
                    return (
                        <MarkerWithInfoWindow report={report} />
                    );
                })}
            </div>
        </div>
    );
}

// This component represents an individual marker in the map. Each marker corresponds to a report and can be clicked to see more information. 
function MarkerWithInfoWindow(props) {
    
  // Determines if we are showing information or not for 
  // this marker
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  const onMarkerClick = (key) => {
      setShowingInfoWindow(true)
  };

  const onInfoWindowClose = () => {
     setShowingInfoWindow(false)
  };

    return (
      <Marker key={props.report.report_id} onClick={onMarkerClick} position={{ lat: props.report.latitude, lng: props.report.longitude }}>
      {showingInfoWindow === true ? <InfoWindow onCloseClick={onInfoWindowClose}>
          <div>
              <p>Country: {props.report.country}</p>
              <p>City: {props.report.city}</p>
              <p>Zipcode: {props.report.zipcode}</p>
              <p>Location: {props.report.latitude}, {props.report.longitude}</p>
              <p>Category: {props.report.category}</p>
              <p>Date/Time: {props.report.date_time}</p>
              <p>Description: {props.report.report_description}</p>
          </div>
      </InfoWindow> : undefined}
  </Marker>
  );
}


export default Map;