import MainHeader from "./MyHeader/MainHeader";
import SubHeader from "./MyHeader/SubHeader";

const MyHeader = () => {
  return (
    <div className="shadow-lg position-sticky top-0">
      <MainHeader />
      <SubHeader />
    </div>
  );
};
export default MyHeader;
