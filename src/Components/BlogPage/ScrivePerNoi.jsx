import { useState } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const ScrivePerNoi = () => {
  const [showMore, setShowMore] = useState(false);
  const articles = useSelector((state) => state.MyFetches.articles);
  return (
    <>
      <Container fluid className="rounded-top-4 p-1 d-flex justify-content-end">
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
      {showMore === false ? (
        <Container className="text-white text-center rounded-top-3 bg-bluedark">
          <div>
            <span>Scrivono Per Noi:</span>
          </div>
        </Container>
      ) : (
        <Container className="text-white rounded-top-3 bg-bluedark">
          <div className="text-center text-yellow">
            <span>Scrivono Per Noi:</span>
          </div>
          <Carousel fade controls={false} indicators={false}>
            <Carousel.Item className="py-4 px-5 ">
              <div className="d-flex justify-content-around">
                <div>
                  <img src="" alt="" />
                  nome
                </div>
                <div>
                  <img src="" alt="" />
                  nome2
                </div>
                <div>
                  <img src="" alt="" />
                  nome3
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="py-4 px-5 ">
              <div className="d-flex justify-content-around">
                <div>
                  <img src="" alt="" />
                  nome4
                </div>
                <div>
                  <img src="" alt="" />
                  nome5
                </div>
                <div>
                  <img src="" alt="" />
                  nome6
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="py-4 px-5 ">
              <div className="d-flex justify-content-around">
                <div>
                  <img src="" alt="" />
                  nome7
                </div>
                <div>
                  <img src="" alt="" />
                  nome8
                </div>
                <div>
                  <img src="" alt="" />
                  nome9
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      )}
    </>
  );
};
export default ScrivePerNoi;
