import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logOutAction } from "../../Redux/Actions";
import { Link } from "react-router-dom";

const LogOutHeader = () => {
  const dispatch = useDispatch();
  return (
    <Container id="navBarDown " fluid className="px-5">
      <div className="d-flex justify-content-end">
        <Link
          to="/"
          className="nav-link"
          onClick={() => {
            dispatch(logOutAction());
          }}
        >
          <div className="mx-2 subNavHover text-white">Esegui Log-Out...</div>
        </Link>
      </div>
    </Container>
  );
};
export default LogOutHeader;
