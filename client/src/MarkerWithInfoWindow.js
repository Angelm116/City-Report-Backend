import React,  { useState }  from 'react';
import {
    InfoWindow,
    Marker,
} from 'react-google-maps';

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

export default MarkerWithInfoWindow;