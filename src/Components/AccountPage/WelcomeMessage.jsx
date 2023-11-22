import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutAction } from "../Redux/Actions";

const WelcomeMessage = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-end pe-3 fw-bold ">
        <span className="fw-normal">Ciao, </span>
        {user[0].name}
      </div>
      <div className="d-flex justify-content-end">
        <Link
          to="../"
          className="nav-link"
          onClick={() => {
            dispatch(logOutAction());
          }}
        >
          <div className="mx-2 subNavHover">Esegui Log-Out...</div>
        </Link>
      </div>
    </>
  );
};
export default WelcomeMessage;
