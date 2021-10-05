import React, { useState, useEffect } from 'react';
import dummyData from './dummydata.json'
import MarkerWithInfoWindow from './MarkerWithInfoWindow.js'


function Markers() {
    // data is the list of report objects that will be
    // displayed in the map. 
    const [data, setData] = useState([]);

    // useEffect is a React hook that executes before
    // the anything renders to the screen. We use it to 
    // pull our data so that it is ready before rendering
    useEffect(() => {
        getReports()
    }, [])

    // This functions populates data. Currenly it gets info from the 
    // dummydata.js file, but in the future it will call our API to 
    // get the data
    const getReports = () => {
        setData(dummyData)
    }

    // Here we generate and return a list of markers to show in the map. We use every report in data to a marker associated with it. 
    return (
        <div>
            <div className="reports-container">
                {data.map((report, key) => {
                    return (
                        <MarkerWithInfoWindow report={report} />
                    );
                })}
            </div>
        </div>
    );
}

export default Markers;