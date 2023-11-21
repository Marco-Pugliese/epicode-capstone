import { Card } from "react-bootstrap";
import { ArrowRightSquareFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const SingleCard = ({ article }) => {
  return (
    <Card className="mx-2 shadow-sm h-100">
      <Card.Img variant="top" src="https://picsum.photos/1000/800" />
      <Card.Body className="p-0 mx-0 text-center d-flex flex-column justify-content-between py-1 ">
        <Card.Title className="smaller">{article.title}</Card.Title>
        <Card.Text className="smaller number">{article.subtitle}</Card.Text>
        <div className="text-end me-2 mb-1">
          <Link to={`/articles/${article.id}`}>
            <ArrowRightSquareFill className="fs-5 verdeMain" />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
export default SingleCard;
