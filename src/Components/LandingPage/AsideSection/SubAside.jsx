import { Carousel, Container } from "react-bootstrap";
import SingleCard from "./SingleCard";

const SubAside = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center my-3">
      <div className="py-2 fs-3">I NOSTRI ULTIMI ARTICOLI</div>
      <Container>
        <Carousel>
          <Carousel.Item>
            <div className="d-flex">
              <SingleCard />
              <SingleCard />
              <SingleCard />
              <SingleCard />
              <SingleCard />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex">
              <SingleCard />
              <SingleCard />
              <SingleCard />
              <SingleCard />
              <SingleCard />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex">
              <SingleCard />
              <SingleCard />
              <SingleCard />
              <SingleCard />
              <SingleCard />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex">
              <SingleCard />
              <SingleCard />
              <SingleCard />
              <SingleCard />
              <SingleCard />
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
};
export default SubAside;
