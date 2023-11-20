import { Card } from "react-bootstrap";
import { ArrowRightSquare, ArrowRightSquareFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const SingleCard = () => {
  return (
    <Card className="mx-2 shadow-sm">
      <Card.Img variant="top" src="https://placekitten.com/300/300" />
      <Card.Body className="p-0 mx-0 text-center">
        <Card.Title className="smaller">Card Title</Card.Title>
        <Card.Text className="smaller number">Card Description</Card.Text>
        <div className="text-end me-2 mb-1">
          <Link to="/articles">
            <ArrowRightSquareFill className="fs-5 verdeMain" />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
export default SingleCard;
