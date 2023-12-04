import { Card, Col } from "react-bootstrap";
import { ArrowRightSquareFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const SingleCardInBlog = ({ article }) => {
  return (
    <Link to={`/articles/${article.id}`} className="nav-link">
      <Card className="mx-2 shadow h-100 bg-sand border-0 rounded-5 d-flex flex-row">
        <Col>
          <Card.Body className="p-0 px-2 mx-0 text-start d-flex flex-column justify-content-between py-1 bg-blueLight rounded-start-4">
            <Card.Title className="smaller fw-bold">
              {article.title}{" "}
              <span className="extrasmall fw-normal number ms-1">
                {" "}
                - {article.author}
              </span>
            </Card.Title>
            <Card.Text className="number m-0 p-0">{article.subtitle}</Card.Text>
          </Card.Body>
        </Col>
        <Col className="col-2 bg-blueLight rounded-end-4">
          <Card.Body className="d-flex h-100 align-items-center justify-content-end ">
            <ArrowRightSquareFill className="fs-5" />
          </Card.Body>
        </Col>
      </Card>
    </Link>
  );
};
export default SingleCardInBlog;
