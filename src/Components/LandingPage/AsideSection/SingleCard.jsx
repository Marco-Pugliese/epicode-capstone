import { Card } from "react-bootstrap";
import { ArrowRightSquare } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const SingleCard = () => {
  return (
    <Card className="mx-2 shadow-sm">
      <Card.Img variant="top" src="https://placekitten.com/300/300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius sint
          culpa itaque ut illum nobis quo, accusantium, blanditiis beatae,
          eveniet nulla quasi repellendus. Autem veritatis tempora eum
          reiciendis consequuntur necessitatibus?
        </Card.Text>
        <div className="text-end">
          <Link to="/articles">
            <ArrowRightSquare />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
export default SingleCard;
