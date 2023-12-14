import { useState } from "react";
import SearchHeroSection from "../LandingPage/HeroSection/SearchHeroSection";
import Spinner from "../Spinner/Spinner";

const SearchPage = ({ id }) => {
  const [show, setShow] = useState(true);
  const hideSpinner = () => {
    setTimeout(() => setShow(false), 1000);
  };
  return (
    <div id="searchPage">
      {hideSpinner()}
      {show === true ? <Spinner /> : <SearchHeroSection />}
    </div>
  );
};
export default SearchPage;
