import { Card, Col, Container, Row } from "react-bootstrap";

const SingleArticle = ({ article }) => {
  return (
    <>
      <div className="bg-blue py-5">
        <Container className="bg-blue">
          <Row className="justify-content-center">
            <Col className="col-8 col-xl-5">
              <Card id="article" className="bg-blue shadow-lg">
                <Card.Img variant="top" src="https://picsum.photos/1000/800" />
                <Card.Body className="bg-sand">
                  <Card.Title>
                    <div className="display-6 text-center fw-bold">
                      {article.title}{" "}
                    </div>
                    <div className="text-end">
                      <span className="smaller">di {article.author}</span>
                      <span className="smaller">. il {article.date}</span>
                    </div>
                  </Card.Title>
                  <Card.Text className="fw-bold fs-6 text-center">
                    {article.subtitle}
                  </Card.Text>
                  <Card.Text>{article.article}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default SingleArticle;
