import { Card } from "react-bootstrap";
import { ArrowRightSquareFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const SingleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.id}`} className="nav-link">
      <Card className="mx-2 shadow h-100 bg-sand border-0 rounded-4 ">
        <Card.Img
          variant="top"
          src="https://picsum.photos/1000/800"
          className="rounded-top-4"
        />
        <Card.Body className="p-0 mx-0 text-center d-flex flex-column justify-content-between py-1 bg-blueLight rounded-bottom-4">
          <Card.Title className="smaller">{article.title}</Card.Title>
          <Card.Text className="smaller number">{article.subtitle}</Card.Text>
          <div className="text-end me-2 mb-1">
            <ArrowRightSquareFill className="fs-5" />
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};
export default SingleCard;
