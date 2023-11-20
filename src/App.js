import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";

import MyFooter from "./Components/Footer/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHeader from "./Components/Header/MyHeader";

function App() {
  return (
    <>
      <MyHeader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <MyFooter />
    </>
  );
}

export default App;
