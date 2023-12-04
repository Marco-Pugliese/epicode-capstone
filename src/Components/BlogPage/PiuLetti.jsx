import { Col, Container, Row } from "react-bootstrap";

import SingleCardInBlog from "./SingleCardInBlog";
import { useState } from "react";

const PiuLetti = ({ articles }) => {
  const [viewMore, setViewMore] = useState(false);
  return articles === undefined ? (
    ""
  ) : (
    <Container>
      <Row className="px-3">
        {articles
          .filter((allArticles, i) =>
            viewMore === false ? i > 9 && i < 14 : i > 9 && i < 18
          )
          .map((singleArticle) => {
            return (
              <Col className="col-12 mb-1 " key={singleArticle.id}>
                <SingleCardInBlog article={singleArticle} />
              </Col>
            );
          })}
        <div
          className="text-end text-yellow pe-4 pointer viewMore"
          onClick={() => {
            setViewMore(!viewMore);
          }}
        >
          {viewMore === true ? "Mostra di meno" : "Mostra di più"}
        </div>
      </Row>
    </Container>
  );
};
export default PiuLetti;
