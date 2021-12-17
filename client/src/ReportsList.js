import React from 'react';
import Card from 'react-bootstrap/Card';


// Markers is in charge of rendering markers in the map
// It takes a list of reports as a prop
function ReportsList(props) {

    return (
        // <Card>
        //     <Card.Header as="h6">Suspicious Activity</Card.Header>
        //     <Card.Body>
        //         <Card.Text>
        //             scnaaaaaaaaaaaaaaaaaaajnscsnck nx jdbvsvndk ncchsiv bcwdc   isjdovdkv bc cdc c hgvwdkvd c csjbv dud hd  bdveucw bbuvf  vn
        //             <br />
        //             Location: 2025 Royal Vista Ct. Orlando, Florida, 32817
        //             <br />
        //             Report Date: 2021-04-28
        //         </Card.Text>
        //     </Card.Body>
        // </Card>

        <div>
            {props.reports.map((report, key) => {
                    return (
                        <Report data={report} />
                    );
                })}
        </div>
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
export default ReportsList;