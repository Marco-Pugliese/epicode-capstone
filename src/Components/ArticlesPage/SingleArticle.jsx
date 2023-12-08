import { Card, Col, Container, Row } from "react-bootstrap";

const SingleArticle = ({ article }) => {
  return (
    <>
      <div className="py-5">
        <Container className="">
          <Row className="justify-content-center">
            <Col className="col-10 col-xl-8 ">
              <Card
                id="article"
                className="shadow-lg bg-transparent rounded-4 "
              >
                <Card.Body className="bg-sand rounded-4 m-0 px-2 py-0">
                  <div className="mx-auto w-50 mb-3 m-2">
                    <Card.Img
                      src="https://picsum.photos/1000/800"
                      className="rounded-top-4 w-100 d-flex justify-content-center "
                    />
                  </div>
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
