import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const SearchHeroSection = () => {
  const [input2, setInput2] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [query2, setQuery2] = useState("");
  const navigate = useNavigate();
  return (
    <Container id="searchHeroSection">
      <div className="w-50 mx-auto">
        <Form
          className="formSearch2 rounded-5"
          onSubmit={(e) => {
            e.preventDefault();
            setQuery2(input2);
            navigate(`/search/${input2}`);
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
            >
              <Search className="searchIcon" />
            </InputGroup.Text>
          </InputGroup>
        </Form>
        <section className="pt-4">
          <div className="text-center">FILTRA PER</div>

          <Row className="justify-content-evenly">
            <Col className="col-5 btn border bg-white mt-2 rounded-4">
              GENERE{" "}
            </Col>
            <Col className="col-5 btn border bg-white mt-2 rounded-4">
              PREZZO
            </Col>
            <Col className="col-5 btn border bg-white mt-2 rounded-4">DATE</Col>
            <Col className="col-5 btn border bg-white mt-2 rounded-4">
              ALTRO
            </Col>
          </Row>
        </section>
      </div>
    </Container>
  );
};
export default SearchHeroSection;
