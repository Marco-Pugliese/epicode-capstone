const LandingHero = () => {
  return (
    <div
      id="landing"
      className="home d-flex flex-column justify-content-center align-items-center display-1 text-white fw-bold py-5"
    >
      <div id="bardoo " className="d-flex  ">
        <div>BARD</div>
        <div className="position-relative">
          OO
          <img
            src="/assets/images/details&logo/oo.png"
            alt="oo"
            className="mb-3 double-o d-none d-xl-block"
            style={{ width: "120px" }}
          />
          <img
            src="/assets/images/details&logo/oo.png"
            alt="oo"
            className=" double-o o2  d-md-none "
            style={{ width: "75px" }}
          />
          <img
            src="/assets/images/details&logo/oo.png"
            alt="oo"
            className=" double-o d-none d-md-block d-lg-none "
            style={{ width: "90px" }}
          />
          <img
            src="/assets/images/details&logo/oo.png"
            alt="oo"
            className=" double-o d-none d-lg-block d-xl-none "
            style={{ width: "105px" }}
          />
        </div>
      </div>
      <div className="display-5">
        FIND YOUR BAR
        <span className="text-warning text-flicker-in-glow">D</span>
      </div>
    </div>
  );
};
export default LandingHero;
