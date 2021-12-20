import React, { useState, useEffect } from 'react';
import dummyData from './dummydata.json'
import MarkerWithInfoWindow from './MarkerWithInfoWindow.js'
import axios from 'axios';
import Map2 from './Map2.js'
import FilterForm from './FilterForm.js'
import ReportsList from './ReportsList.js'
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';


/*
    ReportsPage

    component that will encompass the map and the filter form/list

    state: list of reports

    functions: fetch reports through api

    return: 
            <filterForm> {fetchReports}
            <mapComponent> {reports}
            <filterList> {reports}


*/

function ReportsPage() {
    // data is the list of report objects that will be
    // displayed in the map. 
    const [reports, setReports] = useState([]);

    // useEffect is a React hook that executes before
    // the anything renders to the screen. We use it to 
    // pull our data so that it is ready before rendering
    useEffect(() => {

        getReports()
    }, [])

    // This functions populates data. Currenly it gets info from the 
    // dummydata.js file, but in the future it will call our API to 
    // get the data
    // const getReports = () => {
    //     setData(dummyData)
    // }

    const getReports = () => {
        axios.get('http://18.217.120.94/api/map')
            .then((res) => {
                setReports([...res.data])
                console.log("GETTING REPORTS")
            }).catch((error) => {
                console.log(error)
            });

        //this.setState({ name: '', email: '' })
    }

     
    return (
        // row
        // column 1
              // <map>
        // column 2
              // row 1: filterForm
              // row 2: reportList


        <Container fluid>
            <Row className="map-page">
                <Col sm={8} className="col-map">
                    <div className="map-wrapper">
                        <Map2 reports={reports}/>
                    </div>
                </Col>
                <Col sm={4} className="col-reports">
                    <Row className="filterForm">
                        <h5 style={{ textAlign: "center" }}>Filter by  </h5>
                        <FilterForm fetch={getReports}/>
                    </Row>

                    <Row className="reportsList">
                        <div className="event-wrapper">
                            <h5 style={{ textAlign: "center" }}> Reports </h5>
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