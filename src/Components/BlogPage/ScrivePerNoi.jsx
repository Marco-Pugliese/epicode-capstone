import { useState } from "react";
import { Carousel, Collapse, Container } from "react-bootstrap";
import { ArrowDownCircleFill, ArrowUpCircleFill } from "react-bootstrap-icons";

const ScrivePerNoi = ({ articles }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="position-relative">
      {articles !== undefined ? (
        <div className="d-flex">
          <Container className="text-white text-center rounded-top-3 bg-bluedark">
            {open === true ? (
              <div
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="pointer my-2"
              >
                <ArrowDownCircleFill />
              </div>
            ) : (
              <div
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="pointer "
              >
                <ArrowUpCircleFill />
              </div>
            )}
            <div>
              <span>Scrivono Per Noi:</span>
            </div>
            <Collapse in={open}>
              <div id="example-collapse-text">
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
              </div>
            </Collapse>
          </Container>
        </div>
      ) : null}
    </div>
  );
};
export default ScrivePerNoi;
