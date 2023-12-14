import { Container } from "react-bootstrap";

const Spinner = () => {
  return (
    <div id="spinnerPage" className="h-100">
      <Container className="h-100 d-flex justify-content-center align-items-center">
        {/* <span className="fs-2 text-white">L</span> */}
        <img
          src="/assets/images/details&logo/obianca.png"
          alt="spinner"
          style={{ width: "80px" }}
          className="rotate-scale-down"
        />
        {/* <span className="fs-2 text-white">ADING</span> */}
      </Container>
    </div>
  );
};
export default Spinner;
