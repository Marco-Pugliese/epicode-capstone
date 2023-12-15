import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleBand = ({ band }) => {
  return (
    <Container className="py-1 fs-6 border rounded shadow">
      <Row className="d-flex">
        <Col className="col-9 d-flex align-items-center">
          {band.name} - <span className="smaller">{band.kind_of}</span>
        </Col>
        <Col className="col d-flex justify-content-end align-items-center">
          <Button>
            <span className="smaller">
              <Link to={`/artist/${band.id}`} className="nav-link">
                Visualizza Profilo
              </Link>
            </span>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default SingleBand;
