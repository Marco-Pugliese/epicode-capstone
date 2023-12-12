import { Link } from "react-router-dom";

const ActivityResult = ({ singleActivity }) => {
  return (
    <Link to={`../activity/${singleActivity.id}`} className="nav-link pointer">
      {singleActivity.name_activity} -{" "}
      <span className="smaller">{singleActivity.city}</span>
    </Link>
  );
};
export default ActivityResult;
