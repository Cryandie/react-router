import React from "react";
import { Navbar, Button, Form, Nav, FormControl } from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const Navigation = ({setNameSearch,setRateSearch} ) => {
  return (
    <div className="globalNav">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Movo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="genlinks"><NavLink to="/" exact activeClassName="selected-link">Home </NavLink></Nav.Link>
          <Nav.Link className="genlinks" ><NavLink to="/movies" activeClassName="selected-link">Movies </NavLink></Nav.Link>
          <Nav.Link className="genlinks" ><NavLink to="/about" activeClassName="selected-link">About </NavLink> </Nav.Link>
        </Nav>
        <Form inline>
        <FormControl type="string"  placeholder="Search by title" className="mr-sm-2" onChange={e =>setNameSearch(e.target.value)} />
      <FormControl type="number"  placeholder="Search by rate" className="mr-sm-2" onChange={e =>setRateSearch(e.target.value)} />
       
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};
