import { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";

const ScrivePerNoi = ({ articles }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="position-relative">
      {articles !== undefined ? (
        <div className="d-flex">
          {showMore === false ? (
            <Container className="text-white text-center rounded-top-3 bg-bluedark">
              <div>
                <span>Scrivono Per Noi:</span>
              </div>
            </Container>
          ) : (
            <Container className="text-white rounded-top-3 bg-bluedark">
              <div className="text-center ">
                <span>Scrivono Per Noi:</span>
              </div>
              <Carousel
                className="text-yellow fst-italic smaller"
                fade
                controls={false}
                indicators={false}
              >
                <Carousel.Item className="py-4 px-5 ">
                  <div className="d-flex justify-content-around">
                    <div style={{ width: "150px", height: "150px" }}>
                      <img
                        className="w-100 h-100 rounded border border-warning"
                        src="/assets/images/writers/writer1.jpg"
                        alt={articles[1].author}
                      />
                      {articles[1].author}
                    </div>

                    <div style={{ width: "150px", height: "150px" }}>
                      <img
                        className="w-100 h-100 rounded border border-warning"
                        src="/assets/images/writers/writer2.jpeg"
                        alt={articles[2].author}
                      />
                      {articles[2].author}
                    </div>
                    <div style={{ width: "150px", height: "150px" }}>
                      <img
                        className="w-100 h-100 rounded border border-warning"
                        src="/assets/images/writers/writer3.jpeg"
                        alt={articles[3].author}
                      />
                      {articles[3].author}
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="py-4 px-5 ">
                  <div className="d-flex justify-content-around">
                    <div style={{ width: "150px", height: "150px" }}>
                      <img
                        className="w-100 h-100 rounded border border-warning"
                        src="/assets/images/writers/writer4.jpeg"
                        alt={articles[4].author}
                      />
                      {articles[4].author}
                    </div>
                    <div style={{ width: "150px", height: "150px" }}>
                      <img
                        className="w-100 h-100 rounded border border-warning"
                        src="/assets/images/writers/writer5.jpeg"
                        alt={articles[6].author}
                      />
                      {articles[6].author}
                    </div>
                    <div style={{ width: "150px", height: "150px" }}>
                      <img
                        className="w-100 h-100 rounded border border-warning"
                        src="/assets/images/writers/writer6.jpeg"
                        alt={articles[5].author}
                      />
                      {articles[5].author}
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="py-4 px-5 ">
                  <div className="d-flex justify-content-around">
                    <div style={{ width: "150px", height: "150px" }}>
                      <img
                        className="w-100 h-100 rounded border border-warning"
                        src="/assets/images/writers/writer7.jpeg"
                        alt={articles[15].author}
                      />
                      {articles[15].author}
                    </div>
                    <div style={{ width: "150px", height: "150px" }}>
                      <img
                        className="w-100 h-100 rounded border border-warning"
                        src="/assets/images/writers/writer8.jpeg"
                        alt={articles[8].author}
                      />
                      {articles[8].author}
                    </div>
                    <div style={{ width: "150px", height: "150px" }}>
                      <img
                        className="w-100 h-100 rounded border border-warning"
                        src="/assets/images/writers/writer9.jpeg"
                        alt={articles[16].author}
                      />
                      {articles[16].author}
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Container>
          )}
          <Container
            fluid
            id="showMoreArrow"
            className="position-absolute rounded-top-4 p-1 d-flex justify-content-end"
          >
            <div className="bg-bluedark text-white rounded-3 px-1">
              <span
                className="rounded-3 mx-1 m-0 p-0 px-1 bg-bluedark pointer"
                onClick={() => {
                  setShowMore(!showMore);
                }}
              >
                {showMore === false ? (
                  <ArrowUp className="text-white" />
                ) : (
                  <ArrowDown className="text-white" />
                )}
              </span>
            </div>
          </Container>
        </div>
      ) : null}
    </div>
  );
};
export default ScrivePerNoi;
