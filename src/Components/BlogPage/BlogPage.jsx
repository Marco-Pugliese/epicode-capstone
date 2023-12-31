import { Col, Container, Row } from "react-bootstrap";
import UltimiArticoli from "./UltimiArticoli";
import { useSelector } from "react-redux";
import TuttiGliArticoli from "./TuttiGliArticoli";
import ScrivePerNoi from "./ScrivePerNoi";
import { getArticlesAction } from "../Redux/Actions";
import PiuLetti from "./PiuLetti";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import LogOutHeader from "../Header/MyHeader/LogOutHeader";
import WelcomeMessage from "../AccountPage/WelcomeMessage";
import SubHeader from "../Header/MyHeader/SubHeader";
import Spinner from "../Spinner/Spinner";

const BlogPage = ({ noLogOut }) => {
  const articles = useSelector((state) => state.MyFetches.articles);
  const [selectOne, SetSelectOne] = useState(false);
  const isLogged = useSelector((state) => state.LoggedIn.isLogged);
  const user = useSelector((state) => state.LoggedIn);
  const [show, setShow] = useState(true);
  const hideSpinner = () => {
    setTimeout(() => setShow(false), 1000);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticlesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="blogPage">
      {hideSpinner()}
      {show === true ? (
        <Spinner />
      ) : (
        <div>
          {isLogged === false ? (
            <SubHeader />
          ) : noLogOut === false ? (
            <LogOutHeader />
          ) : (
            <WelcomeMessage user={user.user} />
          )}
          <Container fluid>
            <section className=" d-flex align-items-center justify-content-center">
              <h1 className="text-white fw-bold d-flex align-items-center p-0 m-0 display-5 nexa me-1">
                Il <span className="text-yellow mx-2">Blog</span> di
              </h1>
              <img
                src="/assets/images/details&logo/Bardoo_Logo-02 copia.png"
                alt="logo"
                style={{ width: "175px" }}
                className="ms-2 minibottom"
              />
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
            {selectOne === true ? (
              <PiuLetti articles={articles} />
            ) : (
              <UltimiArticoli articles={articles} />
            )}

            <TuttiGliArticoli articles={articles} />
            <ScrivePerNoi articles={articles} />
          </Container>
        </div>
      )}
    </div>
  );
};
export default BlogPage;
