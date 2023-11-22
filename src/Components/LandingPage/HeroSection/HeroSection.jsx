import MainHeroSection from "./MainHeroSection";
import SearchHeroSection from "./SearchHeroSection";
import SubHeroSection from "./SubHeroSection";
import SubHeader from "../../Header/MyHeader/SubHeader";

const HeroSection = () => {
  return (
    <div>
      <SubHeader />
      <MainHeroSection />
      <SearchHeroSection />
      <SubHeroSection />
    </div>
  );
};
export default HeroSection;
