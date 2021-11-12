import React from 'react';
import Markers from './Markers.js';
import {useEffect, useState} from 'react';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps';
import './App.css';
import Map from './Map.js';
import Analytics from './Analytics.js';

// more organized way but is not working, so temporarily under construction
/* function App() { 
  return (
    <div className="App">
      <Router>
        <HomeNavbar/>
        <div>
          <Main/>
        </div>
      </Router>
    </div>
  );
}


function HomeNavbar(props) {
  return(
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">City Report</Navbar.Brand>
    <Nav className="me-auto">
      
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Map</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/Analytics">Analytics</NavLink></li>

    </Nav>
    </Container>
  </Navbar>
  );
}

function Main() {
  return(
    <Routes>
      <Route exact path="/" component={Map} />
      <Route exact path="/Analytics" component={Analytics} />
    </Routes>
  );
} */

function App() {
  const [currentState, setNewState] =  useState({
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
  })
  
    
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 28.5383, lng: -81.3792 }}>
        <Markers></Markers>
      </GoogleMap>
    ));

    return (
/*       <Router>
       <HomeNavbar/>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVLGDHEq6xP-cu8ja6gJo5dM37gXUGL8k&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `93vh`, width:'70vw' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Router> */

<Router>
  <HomeNavbar/>

  <Container fluid>
    <Row className="map-page">
        <Col sm={8} className = "col-map">
            <div className="map-wrapper">
              <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVLGDHEq6xP-cu8ja6gJo5dM37gXUGL8k&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `93vh` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
        </Col>
        <Col sm={4} className = "col-filter">
            <h2> Filter by </h2>
            <div className="cardDiv card-elevation3">
                <table className="table-full">
                    <tbody>
                    <tr>
                        <th>County: </th>
                        <td>
                            <Form.Control placeholder="University Name"  />
                        </td>
                    </tr>
                    <tr>
                        <th>Zipcode: </th>
                        <td>
                            <Form.Control placeholder="Organization Name"  />
                        </td>
                    </tr>
                    <tr>
                        <th>Start Date: </th>
                        <td>
                            <Form.Control />
                        </td>
                        <th>End Date: </th>
                        <td>
                            <Form.Control  />
                        </td>
                    </tr>
                    <tr>
                        <th>Category: </th>
                        <td>
                            <Form.Control as="select"  >
                                <option value="">All</option>
                            </Form.Control>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <button type="button" className="btn btn-primary btn-search" >Search</button>
        </Col>
    </Row>
  </Container>
</Router>
    );

}

function HomeNavbar(props) {
  return(
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">City Report</Navbar.Brand>
    <Nav className="me-auto">
      
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Map</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/Analytics">Analytics</NavLink></li>

    </Nav>
    </Container>
  </Navbar>
  );
}

export default App
