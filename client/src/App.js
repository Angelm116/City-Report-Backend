import React from 'react';
import Markers from './Markers.js';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps';
import noresult from './noresult.png';
import './App.css';
import Map from './Map.js';
import Analytics from './Analytics.js';

// more organized way but is not working, so temporarily under construction
function App() { 
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
      <Route exact path="/" element={<Map/>} />
      <Route exact path="/Analytics" element={<Analytics/>} />
    </Routes>
  );
}

 export default App;
