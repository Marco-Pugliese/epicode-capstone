import { Col, Container, Row } from "react-bootstrap";
import UltimiArticoli from "./UltimiArticoli";

import TuttiGliArticoli from "./TuttiGliArticoli";
import ScrivePerNoi from "./ScrivePerNoi";
import PiuLetti from "./PiuLetti";
import { useState } from "react";

const BlogPage = () => {
  const [selectOne, SetSelectOne] = useState(false);

  return (
    <Container fluid id="blogPage">
      <section className=" d-flex align-items-center justify-content-center">
        <h1 className="text-white fw-bold d-flex align-items-center p-0 m-0 display-5">
          Il <span className="text-yellow mx-2">Blog</span> di Bard
        </h1>
        <span>
          <img
            src="/assets/images/details&logo/oo.png"
            alt="doppia-o"
            style={{ width: "55px" }}
            className="ms-1 text-pop-up-top2"
          />
        </span>
      </section>
      <Container fluid>
        <Row className="text-center pb-2 px-5 mx-5">
          <Col className="text-yellow fs-2 ms-2">
            <span
              className={
                selectOne === false
                  ? "pointer fw-bold text-white fs-1 switch"
                  : "pointer"
              }
              onClick={() => {
                SetSelectOne(false);
              }}
            >
              Ultimi Articoli
            </span>
            {selectOne === false ? (
              <span>
                <img
                  src="/assets/images/details&logo/freccia-giu-bianca.png"
                  alt="arrow-down"
                  style={{ width: "30px" }}
                  className="ms-4"
                />
              </span>
            ) : null}
          </Col>
          <Col className="text-yellow fs-2 ms-2">
            <span
              className={
                selectOne === true
                  ? "pointer fw-bold text-white fs-1 switch "
                  : "pointer"
              }
              onClick={() => {
                SetSelectOne(true);
              }}
            >
              Più Letti
              {selectOne === true ? (
                <span>
                  <img
                    src="/assets/images/details&logo/freccia-giu-bianca.png"
                    alt="arrow-down"
                    style={{ width: "30px" }}
                    className="ms-4"
                  />
                </span>
              ) : null}
            </span>
          </Col>
        </Row>
      </Container>
      {selectOne === true ? <PiuLetti /> : <UltimiArticoli />}

      <TuttiGliArticoli />
      <ScrivePerNoi />
    </Container>
  );
};
export default BlogPage;
