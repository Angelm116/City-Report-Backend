import React from 'react';
import MarkerWithInfoWindow from './MarkerWithInfoWindow.js'


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