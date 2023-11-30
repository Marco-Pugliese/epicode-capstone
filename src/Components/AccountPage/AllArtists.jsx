import { useSelector } from "react-redux";
import SingleBand from "./SingleBand";

const AllArtists = () => {
  const lastBands = useSelector((state) => state.MyFetches.artists);
  return (
    <div className="text-white fw-bold fs-2">
      Le pagine artista più recenti :
      {lastBands.map((singleBand, i) => (
        <SingleBand key={i} band={singleBand} />
      ))}
    </div>
  );
};
export default AllArtists;
