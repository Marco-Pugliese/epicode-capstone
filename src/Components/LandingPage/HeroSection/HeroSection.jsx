import MainHeroSection from "./MainHeroSection";
import SearchHeroSection from "./SearchHeroSection";
import SubHeroSection from "./SubHeroSection";
import SubHeader from "../../Header/MyHeader/SubHeader";
import { useSelector } from "react-redux";
import LogOutHeader from "../../Header/MyHeader/LogOutHeader";
import WelcomeMessage from "../../AccountPage/WelcomeMessage";

const HeroSection = ({ noLogOut }) => {
  const isLogged = useSelector((state) => state.LoggedIn.isLogged);
  const user = useSelector((state) => state.LoggedIn);
  return (
    <div>
      {isLogged === false ? (
        <SubHeader />
      ) : noLogOut === false ? (
        <LogOutHeader />
      ) : (
        <WelcomeMessage user={user.user} />
      )}
      <MainHeroSection />
      <SearchHeroSection />
      <SubHeroSection />
    </div>
  );
};
export default HeroSection;
