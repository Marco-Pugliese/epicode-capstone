import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ActivityLink = ({ activity }) => {
  return (
    <Col className="col-12">
      <Card className="shadow-lg border-0 m-1 bg-transparent d-flex flex-row">
        <div className=" mx-auto bg-bluedark rounded-start-4 p-1 col-3">
          <Card.Img
            src="https://www.placedog.net/350"
            className="bg-bluedark rounded-4"
            style={{ minWidth: "100px", width: "100%" }}
          />
        </div>
        <Card.Body className="d-flex justify-content-between align-items-center bg-bluedark w-100 rounded-end-4">
          <div>
            <Card.Text className="text-yellow d-flex flex-column">
              <span>
                <span>
                  {activity.name_activity}
                  <span className="extrasmall ms-2">
                    ({activity.kind_of_activity})
                  </span>
                </span>
              </span>
              <span className="smaller fw-normal text-yellow">
                {activity.address}
              </span>
            </Card.Text>
          </div>
          <div className="btn btn-success  d-flex justify-content-center align-items-center">
            <Link to={`/activity/${activity.id}`} className="nav-link">
              <span className="extrasmall">Vai Alla Pagina</span>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default ActivityLink;
