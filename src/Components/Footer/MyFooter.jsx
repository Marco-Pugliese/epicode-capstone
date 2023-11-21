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
    <div id="footer">
      <Container className="d-flex py-3 py-4 border-top">
        <ListGroup className="d-flex flex-row justify-content-around w-50 mt-5">
          <Link className="nav-link navHover" to="/">
            Home
          </Link>
          <Link className="nav-link navHover" to="/Info">
            Info & Contacts
          </Link>
          <Link className="nav-link navHover" to="/FAQs">
            FAQs
          </Link>
          <Link className="nav-link navHover" to="/About">
            About
          </Link>
        </ListGroup>

        <div className=" fs-4 d-flex justify-content-center w-50 mt-5">
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
