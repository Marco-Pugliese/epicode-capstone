/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Button,
  Col,
  Collapse,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import {
  ArrowDownCircleFill,
  ArrowUpCircleFill,
  Search,
  SearchHeartFill,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilterAction } from "../../Redux/Actions";

const SearchHeroSection = ({ compact }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.Filter.filter[0]);
  const [input2, setInput2] = useState("");
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [query2, setQuery2] = useState("");
  const navigate = useNavigate();
  return (
    <Container fluid className="darker">
      {!compact && (
        <div id="searchHeroSection" className="w-50 mx-auto">
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
                placeholder="Cerca..."
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text
                id="basic-addon2"
                className="bg-transparent pointer border-0 border-start rounded-end-5"
                onClick={() => {
                  setQuery2(input2);
                  navigate(`/search/${input2}`);
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
                  dispatch(setFilterAction("genere"));
                }}
                className={
                  filter === "genere"
                    ? "col-5 btn border bg-white mt-2 rounded-4 selectedBtn"
                    : "col-5 btn border bg-white mt-2 rounded-4"
                }
              >
                GENERE
              </Col>
              <Col
                onClick={() => {
                  dispatch(setFilterAction("artista"));
                }}
                className={
                  filter === "artista"
                    ? "col-5 btn border bg-white mt-2 rounded-4 selectedBtn"
                    : "col-5 btn border bg-white mt-2 rounded-4"
                }
              >
                ARTISTA
              </Col>
              <Col
                onClick={() => {
                  dispatch(setFilterAction("attività"));
                }}
                className={
                  filter === "attività"
                    ? "col-5 btn border bg-white mt-2 rounded-4 selectedBtn"
                    : "col-5 btn border bg-white mt-2 rounded-4"
                }
              >
                ATTIVITA'
              </Col>
              <Col
                onClick={() => {
                  dispatch(setFilterAction());
                }}
                className="col-5 btn border bg-white mt-2 rounded-4"
              >
                NESSUNO
              </Col>
            </Row>
          </section>
        </div>
      )}
      {compact && (
        <Container id="compact" className="rounded-bottom-5">
          <>
            {open === true ? (
              <div
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="pointer my-2"
              >
                <ArrowUpCircleFill />
              </div>
            ) : (
              <div
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="pointer "
              >
                <ArrowDownCircleFill />
              </div>
            )}
            <Collapse in={open}>
              <div id="example-collapse-text">
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
                      className="bg-transparent pointer border-0 border-start rounded-end-5"
                      onClick={() => {
                        setQuery2(input2);
                        navigate(`/search/${input2}`);
                      }}
                    >
                      <Search className="searchIcon" />
                    </InputGroup.Text>
                  </InputGroup>
                </Form>
                <section className="py-1 mb-1">
                  <Row className="justify-content-evenly">
                    <Col
                      onClick={() => {
                        dispatch(setFilterAction("genere"));
                      }}
                      className={
                        filter === "genere"
                          ? "btn border bg-white mt-2 mx-1 rounded-4 selectedBtn"
                          : "btn border bg-white mt-2 mx-1 rounded-4"
                      }
                    >
                      GENERE
                    </Col>
                    <Col
                      onClick={() => {
                        dispatch(setFilterAction("artista"));
                      }}
                      className={
                        filter === "artista"
                          ? "btn border bg-white mt-2 mx-1 rounded-4 selectedBtn"
                          : "btn border bg-white mt-2 mx-1 rounded-4"
                      }
                    >
                      ARTISTA
                    </Col>
                    <Col
                      onClick={() => {
                        dispatch(setFilterAction("attività"));
                      }}
                      className={
                        filter === "attività"
                          ? "btn border bg-white mt-2 mx-1 rounded-4 selectedBtn"
                          : "btn border bg-white mt-2 mx-1 rounded-4"
                      }
                    >
                      ATTIVITA'
                    </Col>
                    <Col
                      onClick={() => {
                        dispatch(setFilterAction());
                      }}
                      className="btn border bg-white mt-2 mx-1 rounded-4"
                    >
                      NESSUNO
                    </Col>
                  </Row>
                </section>
              </div>
            </Collapse>
          </>
        </Container>
      )}
    </Container>
  );
};
export default SearchHeroSection;
