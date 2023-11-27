import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
const MainHeader = () => {
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useState("");

  return (
    <>
      <Navbar expand="lg" id="navBarUp" className="py-2">
        <Container fluid className="mx-5 ">
          <Link to="/" className="nav-link fs-5 p-2 pe-5">
            <div>
              <span className="mx-2 text-blueLight fw-bold">BARDOO</span>
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link
                to="/"
                className="nav-link fw-bold my-auto me-4 p-2 navHover"
              >
                Home
              </Link>
              <Link
                to="/"
                className="nav-link fw-bold my-auto  me-4 p-2 navHover"
              >
                BLOG
              </Link>
              <Link
                to="/"
                className="nav-link fw-bold my-auto  me-4 p-2 navHover"
              >
                MARKET
              </Link>
              <Link
                to="/"
                className="nav-link fw-bold my-auto  me-4 p-2 navHover"
              >
                EVENTI
              </Link>
            </Nav>
            <Nav className="text-end">
              <div className="nav-link my-auto mx-2 p-2 ">
                <Link to="/" className="nav-link my-auto  ms-4 p-2 navHover">
                  CONTATTI
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MainHeader;
