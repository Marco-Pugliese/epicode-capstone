import { useState } from "react";
import { Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
const MainHeader = () => {
  const [input, setInput] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <Navbar expand="lg" id="navBarUp" className="py-2">
        <Container fluid className="mx-5 ">
          <Link to="/" className="nav-link fs-5 p-2 pe-5">
            <div>MMPTREE IMAGE</div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className="nav-link my-auto mx-4 p-2 navHover">
                Home
              </Link>
              <Link to="/" className="nav-link my-auto  mx-4 p-2 navHover">
                Generi
              </Link>
              <Link to="/" className="nav-link my-auto  mx-4 p-2 navHover">
                Eventi
              </Link>
              <div className="nav-link my-auto  mx-5 p-2 ">
                <Form
                  className="formSearch rounded-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setQuery(input);
                    navigate(`/search/${input}`);
                  }}
                >
                  <InputGroup className="my-auto">
                    <Form.Control
                      value={input}
                      onChange={(e) => {
                        setInput(e.target.value);
                      }}
                      placeholder="Cerca..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      className="bg-transparent searchInputField border-0 "
                    />
                    <InputGroup.Text
                      id="basic-addon2"
                      className="bg-transparent border-0 border-start"
                    >
                      <Search className="searchIcon" />
                    </InputGroup.Text>
                  </InputGroup>
                </Form>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MainHeader;
