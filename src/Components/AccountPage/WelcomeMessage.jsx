import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutAction } from "../Redux/Actions";

const WelcomeMessage = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div className="text-end bg-bluedark">
      <div className="pe-3 fw-bold  fs-5 bg-bluedark">
        <Link to={`/account/${user[0].id}`} className="nav-link">
          <div className="text-yellow">
            <span className="fw-normal  ">Ciao, </span>
            <span className="text-blueLight">{user[0].name}</span>
          </div>
        </Link>
      </div>
      <div className="d-flex justify-content-end">
        <Link
          to="../"
          className="nav-link"
          onClick={() => {
            dispatch(logOutAction());
          }}
        >
          <div className="pe-2 bg-bluedark subNavHover">Esegui Log-Out...</div>
        </Link>
      </div>
    </div>
  );
};
export default WelcomeMessage;
