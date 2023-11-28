import { Card, Col, Container, Row } from "react-bootstrap";

const SingleArticle = ({ article }) => {
  return (
    <>
      <div className="py-5">
        <Container className="">
          <Row className="justify-content-center">
            <Col className="col-8 col-xl-5 ">
              <Card id="article" className="bg-blue shadow-lg rounded-4">
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/1000/800"
                  className="rounded-top-4"
                />
                <Card.Body className="bg-sand rounded-bottom-4">
                  <Card.Title>
                    <div className="display-6 fw-bold">{article.title} </div>
                    <div className="text-end extrasmall text-gray">
                      <span className="smaller">
                        di
                        <span className="fw-bold fst-italic ms-1">
                          {article.author}
                        </span>
                      </span>
                      <span className="smaller">
                        . in data:
                        <span className="fw-bold fst-italic ms-1">
                          {article.date}
                        </span>
                      </span>
                    </div>
                  </Card.Title>
                  <Card.Text className="fw-bold fs-6 ">
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
