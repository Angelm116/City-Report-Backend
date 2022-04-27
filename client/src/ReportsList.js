import React from 'react';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';


// This component renders the list of reports in the lower right corner of the screen.
function ReportsList(props) {

    return (
        <div>
            {props.reports.map((report, key) => {
                    return (
                        <Report data={report} />
                    );
                })}
        </div>
    );
}

// This component renders the individual list elements. 
// TODO: Create a component to show report details once the button is clicked. 
function Report(props) {
    return(
        <div className="mt-3">
            <Card>
            <Card.Header as="h5">{props.data.category}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Location: {props.data.street_name}
                        <br/>
                        Report Date: {props.data.date_time}
                    </Card.Text>
                    <NavLink exact className="btn btn-primary cardbtn" to={"/EventInfo/"+ props.data.id}>
                         Report Details
                    </NavLink>
                </Card.Body>
            </Card>
        </div>
    );
  }
export default ReportsList;