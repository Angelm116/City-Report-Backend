import React, { useState, useEffect } from 'react';
import dummyData from './dummydata.json'
import axios from 'axios';
import Map from './Map.js'
import FilterForm from './FilterForm.js'
import ReportsList from './ReportsList.js'
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';


// This components serves as a container for the map, filter form, and report list; 
// It also makes the function call to fetch data from the server. 
function ReportsPage() {
    
    const [reports, setReports] = useState([]);             // list of reports pulled from server

    // useEffect is a React hook that executes before
    // anything renders to the screen. We use it to 
    // pull our data so that it is ready before rendering
    useEffect(() => {

        getReports({})

    }, [])

    // In the event that the server is not running, 
    // This function can be used to populate reports with dummy data
    const getDummies = () => {
        setReports(dummyData)
    }

    // Fetch data from the databse
    const getReports = (params) => {
        axios.get('http://test3-env-1.eba-sag8w2d6.us-east-2.elasticbeanstalk.com/api/get-reports', {params})
            .then((res) => {
                setReports([...res.data])
            }).catch((error) => {
                console.log(error)
            });
    }

     
    return (
        
        <Container fluid>
            <Row className="map-page">
                <Col sm={8} className="col-map">
                    <div className="map-wrapper">
                        <Map reports={reports}/>
                    </div>
                </Col>
                <Col sm={4} className="col-reports">
                    
                    <Row className="filterForm" style={{padding: 12}}>  
                        <h5 style={{ textAlign: "center", display: "inline-block" }}>Filters: </h5>                       
                        <FilterForm fetch={getReports}/>
                    </Row>
                
                    <Row className="reportsList">
                        <div className="event-wrapper">
                            <h5 style={{ textAlign: "center" }}> {reports.length + " Reports Found:"} </h5>
                            <div className="cardDiv card-elevation3">
                                <ReportsList reports={reports}/>
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ReportsPage;