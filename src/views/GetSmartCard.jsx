import Card from '../components/Card/Card';
// import FormInputs from '../components/FormInputs/FormInputs';
import Button from "../components/CustomButton/CustomButton.jsx";
import React from 'react';
import {
    Container,
    Row,
    Col,Navbar, Nav, Form, FormControl, 
    // Input
} from "react-bootstrap";

// import { Button } from 'reactstrap';

function GetSmartCard() {
    return (
        <div className="content">
             <Form>

<Navbar bg="light" variant="light">
  <Nav className='m-auto'>
    <Nav.Link href="/" style={{ fontWeight: "bold", color: "black" }}>Home</Nav.Link>
    <Nav.Link href="#features" style={{ fontWeight: "bold", color: "black" }}>Timetables</Nav.Link>
    <Nav.Link href="#pricing" style={{ fontWeight: "bold", color: "black" }}>Plan Your Journey</Nav.Link>
    <Nav.Link href="#home" style={{ fontWeight: "bold", color: "black" }}>Maps</Nav.Link>
    <Nav.Link href="#features" style={{ fontWeight: "bold", color: "black" }}>Sign In</Nav.Link>
  </Nav>

</Navbar>
<hr/>
</Form>
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            content={
                                <form style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
                                    <div class="row mt-4">
                                        <h1 style={{marginLeft: 14}}>Order My Smart Travel Card</h1>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div class="col-md-12">
                                            <label>
                                                Full Name
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Willy Wonka" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-6">
                                            <label>
                                                NIC Number
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="1254256484V" />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <label>
                                                Mobile Number
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="07XXXXXXX" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-12">
                                            <label>
                                                Address - Line One
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Enter Address Line 1" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-12">
                                            <label>
                                                Address - Line Two
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Enter Address Line 2" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-6">
                                            <label>
                                                District
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Kandy" />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <label>
                                                Postal Code
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="20000" />
                                            </div>
                                        </div>
                                    </div>


                                    <Button block  fill color="info" size="lg" type="button">
                                        Submit
                                    </Button>
                                </form>
                            }
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GetSmartCard
