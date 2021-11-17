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

function Map() {
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
    
  const [reports, setReports] = useState([]);
  const [county, setCounty] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [categ, setCateg] = useState("");
    
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 28.5383, lng: -81.3792 }}>
        <Markers></Markers>
      </GoogleMap>
    ));

    function doSearch(){
/*       API.getReports({county, city, zipcode, startDate, endDate, categ}).then(
          (list) => {
              setReports(list.length ? list.map((item) => <Report key={item.report_id} data={item}/>) :
              <div>
              <img className="notFoundImg" src={noresult} alt="empty state" />
              <h2 className="not-found">No match found</h2>
              </div> );
          }); */
    }

    return (
/*       <Router>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVLGDHEq6xP-cu8ja6gJo5dM37gXUGL8k&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `93vh`, width:'70vw' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Router> */

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
            <h5 style={{textAlign: "center"}}>Filter by  </h5>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="County">
                  <Form.Label column sm={2}>
                    County
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control placeholder="county" value={county} onChange={(x) => setCounty(x.target.value)}/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="City">
                  <Form.Label column sm={2}>
                    City
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control placeholder="city" value={city} onChange={(x) => setCity(x.target.value)}/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="Zipcode">
                  <Form.Label column sm={2}>
                    Zipcode
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control placeholder="zipcode" value={zipcode} onChange={(x) => setZipcode(x.target.value)}/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="Date">
                  <Form.Label column sm={2}>
                    Date
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control type="date" value={startDate} onChange={(x) => setStartDate(x.target.value)}/>
                  </Col>
                  <Form.Label column sm={1}>
                    to
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control type="date" value={endDate} onChange={(x) => setEndDate(x.target.value)} />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="Category">
                  <Form.Label column sm={2}>
                    Category
                  </Form.Label>
                  <Col sm={7}>
                    <Form.Control as="select" type="category" placeholder="category" value={categ} onChange={(x) => setCateg(x.target.value)}>
                    <option value="">All</option>
                    <option value="Pedestrian danger">Pedestrian danger</option>
                    <option value="Dangerous intersection">Dangerous intersection</option>
                    <option value="Suspicious activity">Suspicious activity</option>
                    <option value="Physical damage">Physical damage</option>
                    </Form.Control>
                  </Col>
                  <Col sm={3}>
                    <button type="button" className="btn btn-primary btn-search" onClick={doSearch}>Search</button>
                  </Col>
                </Form.Group>
                
          </Form>

          <div className="event-wrapper">
            <h5 style={{textAlign: "center"}}> Reports </h5>
            <div className="cardDiv card-elevation3">
                <Card>
                <Card.Header as="h6">Suspicious Activity</Card.Header>
                <Card.Body>
                    <Card.Text>
                    scnaaaaaaaaaaaaaaaaaaajnscsnck nx jdbvsvndk ncchsiv bcwdc   isjdovdkv bc cdc c hgvwdkvd c csjbv dud hd  bdveucw bbuvf  vn 
                    <br/>
                    Location: 2025 Royal Vista Ct. Orlando, Florida, 32817
                    <br/>
                    Report Date: 2021-04-28 
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
            {reports}
          </div>

        </Col>
    </Row>
  </Container>
    );

}

function Report({data}) {
  return(
      <div className="cardDiv card-elevation3">
          <Card>
          <Card.Header as="h5">{data.category}</Card.Header>
          <Card.Body>
              {/*<Card.Title>Subtitle</Card.Title>*/}
              <Card.Text>
              Location: {data.loc.location_name}
              <br/>
              {/*<div dangerouslySetInnerHTML={{ __html:data.description}} />*/}
              Report Date: {data.date}
              <NavLink exact className="btn btn-primary cardbtn" to={"/EventInfo/"+ data.event_id}> Report Details </NavLink>
              </Card.Text>
          </Card.Body>
          </Card>
      </div>
  );
}



export default Map;
