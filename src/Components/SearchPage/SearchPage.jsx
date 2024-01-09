import { useState } from "react";
import SearchHeroSection from "../LandingPage/HeroSection/SearchHeroSection";
import Spinner from "../Spinner/Spinner";
import { useSelector } from "react-redux";
import SubHeader from "../Header/MyHeader/SubHeader";
import LogOutHeader from "../Header/MyHeader/LogOutHeader";
import WelcomeMessage from "../AccountPage/WelcomeMessage";

const SearchPage = ({ id, noLogOut }) => {
  const logged = useSelector((state) => state.LoggedIn.isLogged);
  const user = useSelector((state) => state.LoggedIn);
  const [show, setShow] = useState(true);
  const hideSpinner = () => {
    setTimeout(() => setShow(false), 1000);
  };
  return (
    <div id="searchPage">
      {hideSpinner()}
      {logged === false ? (
        <SubHeader />
      ) : noLogOut === false ? (
        <LogOutHeader />
      ) : (
        <WelcomeMessage user={user.user} />
      )}
      {show === true ? <Spinner /> : <SearchHeroSection />}
    </div>
  );
};
export default SearchPage;
