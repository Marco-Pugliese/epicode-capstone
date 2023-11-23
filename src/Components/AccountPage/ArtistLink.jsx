const ArtistLink = ({ artist }) => {
  return (
    <div className="fw-bold fs-4  d-flex align-items-center px-2">
      {console.log(artist)}
      {artist.name} -
      <span className="extrasmall mx-1 mt-1 fw-normal">
        {artist.kind_of} / {artist.address}
      </span>
    </div>
  );
};
export default ArtistLink;
