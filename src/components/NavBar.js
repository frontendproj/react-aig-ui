import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import AIGlogo from '../assets/AIG-logo-one.png'
import Header from '../components/Header/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { Navbar,Container,Nav,NavDropdown,Form ,FormControl,Button} from 'react-bootstrap';


export default class NavBar  extends Component {
  render() {
    return (
      <>
      <div className="NavBar-Main">
      
      <div className='NavBar-child'>
      
          <Navbar bg="light" expand="lg" className='navbar'>
  <Container fluid>
    <Navbar.Brand href="#"><img src={AIGlogo} alt="aiglogo"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1"  className="overview">Overview</Nav.Link>
        <NavDropdown title="Manage" id="navbarScrollingDropdown" className="manage">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#action2" className="loan">Loan</Nav.Link>
        <NavDropdown title="Document&Forms" id="navbarScrollingDropdown" className="documentform">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="ContactUs" id="navbarScrollingDropdown" className="contactus">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
       
        {/* <Nav.Link href="#" disabled>
          Link
        </Nav.Link> */}
        <Header/>
      </Nav>
      
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
      
      </div>
      <Card/>
      <Footer/>
      </>
    )
  }
}
