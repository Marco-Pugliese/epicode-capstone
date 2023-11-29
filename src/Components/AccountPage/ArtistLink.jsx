import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArtistLink = ({ artist }) => {
  return (
    <Col className="col-12">
      <Card className="shadow-lg d-flex flex-row border-0 m-1 bg-transparent">
        <div className=" mx-auto bg-bluedark rounded-start-4 col-3 p-1">
          <Card.Img
            src="https://www.placedog.net/400"
            className="bg-bluedark rounded-4"
            style={{ minWidth: "100px", width: "100%" }}
          />
        </div>
        <Card.Body className="d-flex justify-content-between align-items-center bg-bluedark w-100 rounded-end-4">
          <div>
            <Card.Text className="text-yellow">
              {artist.name}
              <span className="extrasmall"> ({artist.kind_of})</span>
              <div className="extrasmall fw-normal text-yellow">
                {artist.address}
              </div>
            </Card.Text>
          </div>
          <div>
            <Link to={`/artist/${artist.id}`} className="nav-link">
              <div className="btn btn-success  d-flex justify-content-center align-items-center">
                <span className="extrasmall">Vai Alla Pagina</span>
              </div>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default ArtistLink;
