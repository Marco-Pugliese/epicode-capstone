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
            <Card.Text className="text-yellow d-flex flex-column">
              <span>
                <span>{artist.name}</span>
                <span className="extrasmall ms-2"> ({artist.kind_of})</span>
              </span>
              <span className="extrasmall fw-normal text-yellow">
                {artist.address}
              </span>
            </Card.Text>
          </div>

          <div className="btn btn-success d-flex justify-content-center align-items-center">
            <Link to={`/artist/${artist.id}`} className="nav-link">
              <span className="extrasmall">Vai Alla Pagina</span>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default ArtistLink;
