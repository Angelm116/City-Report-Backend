import 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import {NavLink} from 'react-router-dom';

function NavigationBar(props) {
  return (
    <Navbar className="color-nav" variant="light">
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

export default NavigationBar;