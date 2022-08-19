import React from 'react';
import { Form , Nav ,Button , Navbar , Container } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

function Filter({setTitle ,setSearchRate}) {
  const ratingChanged = (newRating) => {
    setSearchRate(newRating)
    };
  return (
    <div  >
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <ReactStars
          count={5}
          size={ 30}
          onChange ={ratingChanged}
          edit= {true}
          isHalf={true}
           />
          <Form className="d-flex">
          
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setTitle(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Filter