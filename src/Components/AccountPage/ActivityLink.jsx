import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ActivityLink = ({ activity }) => {
  return (
    <Col className="col-12">
      <Card className="shadow-lg border-0 m-1 bg-transparent d-flex flex-row">
        <div className=" mx-auto bg-bluedark rounded-start-4 p-1 col-3">
          <Card.Img
            src="https://www.placedog.net/400"
            className="bg-bluedark rounded-4"
            style={{ minWidth: "100px", width: "100%" }}
          />
        </div>
        <Card.Body className="d-flex justify-content-between align-items-center bg-bluedark w-100 rounded-end-4">
          <div>
            <Card.Text className="text-yellow">
              {activity.name_activity}
              <span className="extrasmall"> ({activity.kind_of_activity})</span>
              <div className="smaller fw-normal text-yellow">
                {activity.address}
              </div>
            </Card.Text>
          </div>
          <div>
            <Link to={`/activity/${activity.id}`} className="nav-link">
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
export default ActivityLink;
