import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleCardInBlog from "./SingleCardInBlog";
import { useState } from "react";

const UltimiArticoli = () => {
  const articles = useSelector((state) => state.MyFetches.articles);
  const [viewMore, setViewMore] = useState(false);
  return articles === undefined ? (
    ""
  ) : (
    <Container>
      <Row className="px-3">
        {articles
          .filter((allArticles, i) => (viewMore === true ? i < 8 : i < 4))
          .map((singleArticle) => {
            return (
              <Col className="col-12 mb-1" key={singleArticle.id}>
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
export default UltimiArticoli;
