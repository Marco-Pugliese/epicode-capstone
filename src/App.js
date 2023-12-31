import { Route, Routes } from "react-router-dom";
import "./App.css";
import "../src/Components/CSS/Animations.css";
import "../src/Components/CSS/Carousels.css";
import "../src/Components/CSS/Header.css";
import "../src/Components/CSS/Hero.css";
import "../src/Components/CSS/Media.css";
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
  getCandidatureAction,
  getEventsAction,
  getUsersAction,
} from "./Components/Redux/Actions";
import ArticlesPage from "./Components/ArticlesPage/ArticlesPage";
import LogInPage from "./Components/LogInPage/LogInPage";
import AccountPage from "./Components/AccountPage/AccountPage";
import ArtistPage from "./Components/ArtistPage/ArtistPage";
import ActivityPage from "./Components/ActivityPage/ActivityPage";
import BlogPage from "./Components/BlogPage/BlogPage";
import ContactsPage from "./Components/ContactsPage/ContactsPage";
import Page404 from "./Components/404/Page404";
import SearchPage from "./Components/SearchPage/SearchPage";
import EventsPage from "./Components/EventsPage/EventsPage";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import ResultsPage from "./Components/SearchPage/ResultsPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticlesAction());
    dispatch(getUsersAction());
    dispatch(getArtistsAction());
    dispatch(getActivitiesAction());
    dispatch(getEventsAction());
    dispatch(getCandidatureAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="all" className="d-flex flex-column h-100">
      <MyHeader />

      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles/:id" element={<ArticlesPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/account/:id" element={<AccountPage />} />
          <Route path={`/artist/:id`} element={<ArtistPage />} />
          <Route path={`/activity/:id`} element={<ActivityPage />} />
          <Route path={`/contacts`} element={<ContactsPage />} />
          <Route path={`/*`} element={<Page404 />} />
          <Route path={`/events`} element={<EventsPage />} />
          <Route path={`/searchpage`} element={<SearchPage />} />
          <Route path={`/search/:id`} element={<ResultsPage />} />
        </Routes>
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
