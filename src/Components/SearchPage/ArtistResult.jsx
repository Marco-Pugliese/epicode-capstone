import { Link } from "react-router-dom";

const ArtistResult = ({ singleArtist }) => {
  return (
    <div>
      <Link to={`../artist/${singleArtist.id}`} className="nav-link pointer">
        {singleArtist.name}
        {" / "}
        <span className="smaller">{singleArtist.kind_of}</span>
      </Link>
    </div>
  );
};
export default ArtistResult;
