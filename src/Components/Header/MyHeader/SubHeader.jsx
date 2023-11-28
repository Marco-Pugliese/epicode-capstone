import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <Container id="navBarDown" fluid className="px-5">
      <div className="d-flex justify-content-end">
        <Link to="/login" className="nav-link">
          <div className="mx-2 text-white subNavHover">
            Accedi/Registrati Ora...
          </div>
        </Link>
      </div>
    </Container>
  );
};
export default SubHeader;
