import React, {useState} from 'react';
import {Form, Row, Col} from 'react-bootstrap';


function FilterForm(props) {
    
  const [county, setCounty] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [categ, setCateg] = useState("");

  const fetch = () => {

    // when the filtering api is finished, we will somehow pass all of the state variables of this components to this funciton. 
      props.fetch();
  }
    
    return (
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="County">
                <Form.Label column sm={2}>
                    County
                </Form.Label>
                <Col sm={9}>
                    <Form.Control placeholder="county" value={county} onChange={(x) => setCounty(x.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="City">
                <Form.Label column sm={2}>
                    City
                </Form.Label>
                <Col sm={9}>
                    <Form.Control placeholder="city" value={city} onChange={(x) => setCity(x.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="Zipcode">
                <Form.Label column sm={2}>
                    Zipcode
                </Form.Label>
                <Col sm={9}>
                    <Form.Control placeholder="zipcode" value={zipcode} onChange={(x) => setZipcode(x.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="Date">
                <Form.Label column sm={2}>
                    Date
                </Form.Label>
                <Col sm={4}>
                    <Form.Control type="date" value={startDate} onChange={(x) => setStartDate(x.target.value)} />
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
                    <button type="button" className="btn btn-primary btn-search" onClick={fetch}>Search</button>
                </Col>
            </Form.Group>
        </Form>
    );
}

export default FilterForm;