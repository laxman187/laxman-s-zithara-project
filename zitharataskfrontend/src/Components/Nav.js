import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Nav = () => {
  return (
    <>
      <Navbar className="bg-primary" variant="dark" expand="lg" style={{ padding: "10px 0" }}>
        <Container>
          <Navbar.Brand style={{ fontSize: "24px" }}>Zithara Custom_Application</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
