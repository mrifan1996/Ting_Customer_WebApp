import Card from '../components/Card/Card';
// import FormInputs from 'components/FormInputs/FormInputs';
import Button from "../components/CustomButton/CustomButton";
// import 'moment/locale/fr';
import React from 'react';
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    Nav,
    Navbar,
    Table,
    InputGroup,
    Container
    // Input
} from "react-bootstrap";
import {
    InputGroupAddon,
    InputGroupText
} from "reactstrap";
import ReactDatetime from "react-datetime";

function ViewTimetable() {
    return (
        <div className="col-md-12">
            <Container fluid>
                <Navbar bg="light" variant="light">
                    <Nav className='m-auto'>
                        <Nav.Link href="/" style={{ fontWeight: "bold", color: "black" }}>Home</Nav.Link>
                        <Nav.Link href="#features" style={{ fontWeight: "bold", color: "black" }}>Timetables</Nav.Link>
                        <Nav.Link href="#pricing" style={{ fontWeight: "bold", color: "black" }}>Plan Your Journey</Nav.Link>
                        <Nav.Link href="#home" style={{ fontWeight: "bold", color: "black" }}>Maps</Nav.Link>
                        <Nav.Link href="#features" style={{ fontWeight: "bold", color: "black" }}>Sign In</Nav.Link>
                    </Nav>

                </Navbar>
                <Row>
                    <Col md={12}>
                        <Card
                            title="Timetable"
                            // category="Here is a subtitle for this table"
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th>Bus No Plate</th>
                                            <th>Start Halt</th>
                                            <th>End Halt</th>
                                            <th>Start Time</th>
                                            <th>End Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>PE 9501</td>
                                            <td>Colombo</td>
                                            <td>Kandy</td>
                                            <td>11:20</td>
                                            <td>14:00</td>
                                        </tr>
                                        <tr>
                                            <td>PE 9501</td>
                                            <td>Colombo</td>
                                            <td>Kandy</td>
                                            <td>11:20</td>
                                            <td>14:00</td>
                                        </tr>
                                        <tr>
                                            <td>PE 9501</td>
                                            <td>Colombo</td>
                                            <td>Kandy</td>
                                            <td>11:20</td>
                                            <td>14:00</td>
                                        </tr>
                                        <tr>
                                            <td>PE 9501</td>
                                            <td>Colombo</td>
                                            <td>Kandy</td>
                                            <td>11:20</td>
                                            <td>14:00</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            }
                        />
                    </Col>
                </Row>
                <hr />
            </Container>
        </div>
    )
}

export default ViewTimetable
