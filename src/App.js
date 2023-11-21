import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";

import MyFooter from "./Components/Footer/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHeader from "./Components/Header/MyHeader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getActivitiesAction,
  getArticlesAction,
  getArtistsAction,
  getUsersAction,
} from "./Components/Redux/Actions";
import ArticlesPage from "./Components/ArticlesPage/ArticlesPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticlesAction());
    dispatch(getUsersAction());
    dispatch(getArtistsAction());
    dispatch(getActivitiesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MyHeader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles/:id" element={<ArticlesPage />} />
      </Routes>
      <MyFooter />
    </>
  );
}

export default App;
