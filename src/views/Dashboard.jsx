import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav,Col, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bus from '../assets/images/bus.jpg'
import user from '../assets/images/user.jpg';
import card from '../assets/images/card.jpg';
import money from '../assets/images/money.png';
import question from '../assets/images/question.jpg';
import GetSmartCard from './GetSmartCard';

export default function Dashboard() {
  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif", fontSize: 35 }}>Sri Lanka Transport Board</h1>
      <p style={{ textAlign: "center" }}>Welcome To SLTB EXPRESS online services!</p>
      <hr style={{ width: "150vh" }} />
      <Form>

        <Navbar bg="light" variant="light">
          <Nav className='m-auto'>
            <Nav.Link href="/" style={{ fontWeight: "bold", color: "black" }}>Home</Nav.Link>
            <Nav.Link href="/timetables" style={{ fontWeight: "bold", color: "black" }}>Timetables</Nav.Link>
            <Nav.Link href="#pricing" style={{ fontWeight: "bold", color: "black" }}>Plan Your Journey</Nav.Link>
            <Nav.Link href="#home" style={{ fontWeight: "bold", color: "black" }}>Maps</Nav.Link>
            <Nav.Link href="#features" style={{ fontWeight: "bold", color: "black" }}>Sign In</Nav.Link>
          </Nav>

        </Navbar>
      </Form>
      <br />
      <div>
        <div className="d-flex justify-content-center"
          style={{
            backgroundImage: `url(${bus})`, backgroundRepeat: 'no-repeat', height: '650px', color: 'white', width: '1000'
          }}>
          <div className="d-flex align-content-center flex-wrap bd-highligh example-parent" >
            <div ><a className="mr-5">
              <img src={user} alt="Logo" style={{ width: '150px', height: "150px" }} /></a><div style={{ color: "white" }}><p>Create An Account</p></div></div>

            <div >
              <Link to="/getSmartCard">
                <a className="mr-5" ><img src={card} alt="Logo" style={{ width: '150px', height: "150px" }} /></a><p>Get My Smart Card</p>
              </Link>
            </div>

            <div ><a className="mr-5" href='https://www.google.com'><img src={money} alt="Logo" style={{ width: '150px', height: "150px" }} /></a><p>Top-Up My Account</p></div>
            <div ><a className="mr-5" href='https://www.google.com'><img src={question} alt="Logo" style={{ width: '150px', height: "150px" }} /></a><p>Online Help</p></div>
          </div>
        </div>
      </div>
      {/* <Link to='/getSmartCard' component={GetSmartCard}>Hello</Link> */}
      <br />
      <br />
      <br />
      <h4 style={{ textAlign: "center" }}>Search For A Schedule</h4>
      <br/>
      <Form>
        
            <Form.Control placeholder="Route Number" type="number"/>
      <br/>
          <Button block  fill color="info"  type="button">
                                        Submit
                                    </Button>
       
      </Form>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>


  )
}

