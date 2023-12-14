const LandingHero = () => {
  return (
    <div
      id="landing"
      className="home d-flex flex-column justify-content-center align-items-center display-1 text-white fw-bold py-5 blur"
    >
      <div className=" rounded-5">
        <div id="bardoo" className="d-flex justify-content-center ">
          <div className="fw-bold">
            <img
              src="/assets/images/details&logo/Bardoo_Logo-02 copia.png"
              alt="logo"
              style={{ width: "400px" }}
              className="mb-2"
            />
          </div>
        </div>
        <div className="display-6 findyourbard ">
          FIND YOUR BAR
          <span className="text-warning text-flicker-in-glow">D</span>
        </div>
      </div>
    </div>
  );
};
export default LandingHero;
