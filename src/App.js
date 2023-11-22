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
import LogInPage from "./Components/LogInPage/LogInPage";

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
    <div className="d-flex flex-column h-100">
      <MyHeader />

      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles/:id" element={<ArticlesPage />} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
