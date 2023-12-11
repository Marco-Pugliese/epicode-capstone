/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const SearchHeroSection = () => {
  const [filter, setFilter] = useState(".");
  const [input2, setInput2] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [query2, setQuery2] = useState("");
  const navigate = useNavigate();
  return (
    <Container fluid id="searchHeroSection" className="darker">
      <div className="w-50 mx-auto">
        <Form
          className="formSearch2 rounded-5"
          onSubmit={(e) => {
            e.preventDefault();
            setQuery2(input2);
            navigate(`/search/${input2}&${filter}`);
          }}
        >
          <InputGroup className="my-auto">
            <Form.Control
              className="bg-transparent searchInputField border-0 "
              value={input2}
              onChange={(e) => {
                setInput2(e.target.value);
              }}
              placeholder="Cerca nella tua zona..."
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text
              id="basic-addon2"
              className="bg-transparent border-0 border-start rounded-end-5"
              onClick={() => {
                setQuery2(input2);
                navigate(`/search/${input2}&${filter}`);
              }}
            >
              <Search className="searchIcon" />
            </InputGroup.Text>
          </InputGroup>
        </Form>
        <section className="pt-4">
          <div className="text-center text-white">FILTRA PER</div>

          <Row className="justify-content-evenly">
            <Col
              onClick={() => {
                setFilter("a");
              }}
              className={
                filter === "a"
                  ? "col-5 btn border bg-white mt-2 rounded-4 selectedBtn"
                  : "col-5 btn border bg-white mt-2 rounded-4"
              }
            >
              GENERE
            </Col>
            <Col
              onClick={() => {
                setFilter("b");
              }}
              className={
                filter === "b"
                  ? "col-5 btn border bg-white mt-2 rounded-4 selectedBtn"
                  : "col-5 btn border bg-white mt-2 rounded-4"
              }
            >
              ARTISTA
            </Col>
            <Col
              onClick={() => {
                setFilter("c");
              }}
              className={
                filter === "c"
                  ? "col-5 btn border bg-white mt-2 rounded-4 selectedBtn"
                  : "col-5 btn border bg-white mt-2 rounded-4"
              }
            >
              ATTIVITA'
            </Col>
            <Col
              onClick={() => {
                setFilter("");
              }}
              className="col-5 btn border bg-white mt-2 rounded-4"
            >
              NESSUNO
            </Col>
          </Row>
        </section>
      </div>
    </Container>
  );
};
export default SearchHeroSection;
