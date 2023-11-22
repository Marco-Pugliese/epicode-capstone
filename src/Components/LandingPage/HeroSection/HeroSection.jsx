import MainHeroSection from "./MainHeroSection";
import SearchHeroSection from "./SearchHeroSection";
import SubHeroSection from "./SubHeroSection";
import SubHeader from "../../Header/MyHeader/SubHeader";
import { useSelector } from "react-redux";
import LogOutHeader from "../../Header/MyHeader/LogOutHeader";

const HeroSection = () => {
  const isLogged = useSelector((state) => state.LoggedIn.isLogged);
  return (
    <div>
      {isLogged === true ? <LogOutHeader /> : <SubHeader />}
      <MainHeroSection />
      <SearchHeroSection />
      <SubHeroSection />
    </div>
  );
};
export default HeroSection;
