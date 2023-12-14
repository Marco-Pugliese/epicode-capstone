import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const goToHome = () => {
    setTimeout(navigateToHome, 3500);
  };

  return (
    <div
      id="page404"
      className="text-yellow display-3 d-flex align-items-center justify-content-center text-center"
    >
      <Container className="fw-bold">
        SEMBRA CHE QUALCOSA SIA ANDATO STORT{" "}
        <span>
          <img
            src="/assets/images/details&logo/ocerchiata.png"
            alt="`o` cerchiata"
          />
        </span>
        !
        <div className="pt-5 fw-normal fs-5 d-flex justify-content-center">
          {" "}
          Verrai reindirizzato alla HomePage a breve! Clicca{" "}
          <Link to={"/"} className="nav-link">
            <span className="fw-bold px-2">QUI</span>
          </Link>{" "}
          se non vieni reindirizzato in automatico
        </div>
        {goToHome()}
      </Container>
    </div>
  );
};
export default Page404;
