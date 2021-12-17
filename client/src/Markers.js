import React, { useState, useEffect } from 'react';
import dummyData from './dummydata.json'
import MarkerWithInfoWindow from './MarkerWithInfoWindow.js'
import axios from 'axios';


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

export default Markers;