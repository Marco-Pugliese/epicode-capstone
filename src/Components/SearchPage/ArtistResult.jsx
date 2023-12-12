import { Link } from "react-router-dom";

const ArtistResult = ({ singleArtist }) => {
  return (
    <div>
      <Link to={`../artist/${singleArtist.id}`} className="nav-link pointer">
        {singleArtist.name}
      </Link>
    </div>
  );
};
export default ArtistResult;
