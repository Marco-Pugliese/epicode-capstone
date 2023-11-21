import MainHeader from "./MyHeader/MainHeader";
import SubHeader from "./MyHeader/SubHeader";

const MyHeader = () => {
  return (
    <div id="header" className="shadow-lg position-sticky top-0 z-2">
      <MainHeader />
      <SubHeader />
    </div>
  );
};
export default MyHeader;
