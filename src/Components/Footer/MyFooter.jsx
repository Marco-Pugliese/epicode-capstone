import { Container, ListGroup } from "react-bootstrap";
import {
  Envelope,
  Facebook,
  Instagram,
  Telephone,
  X,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const MyFooter = () => {
  return (
    <div id="footer" className="pt-5 pb-4 text-white">
      <Container className="text-center  mt-2 pb-2">
        ©LOREM_MUSIC all rights reserved -{" "}
      </Container>
      <Container className="d-flex border-top pt-2">
        <ListGroup className="d-flex flex-row justify-content-around w-50">
          <Link className="nav-link navHover" to="/">
            Home
          </Link>
          <Link className="nav-link navHover" to="/contacts">
            Info & Contacts
          </Link>
          <Link className="nav-link navHover" to="/FAQs">
            FAQs
          </Link>
          <Link className="nav-link navHover" to="/About">
            About
          </Link>
        </ListGroup>

        <div className=" fs-4 d-flex justify-content-center w-50">
          <Link to={"/instagram"}>
            <Instagram className="navHover mx-3 " />
          </Link>
          <Link to="twitter">
            <X className="navHover mx-3 " />
          </Link>
          <Link to="/FaceBook">
            <Facebook className="navHover mx-3 " />
          </Link>
          <Link to="/phone">
            <Telephone className="navHover mx-3 " />
          </Link>
          <Link to="/mail">
            <Envelope className="navHover mx-3 " />
          </Link>
        </div>
      </Container>
    </div>
  );
};
export default MyFooter;
