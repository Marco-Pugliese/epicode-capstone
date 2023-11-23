import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import WelcomeActivityMessage from "./WelcomeActivityMessage";
import ActivityLink from "./ActivityLink";
import ArtistLink from "./ArtistLink";
import AddAnArtist from "./AddAnArtist";
import AddAnActivity from "./AddAnActivity";
import { useEffect } from "react";
import { getActivitiesAction, getArtistsAction } from "../Redux/Actions";

const ArtistActivityContent = () => {
  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.LoggedIn.user[0]);
  const emailLogged = userLogged.email;
  const allTheArtists = useSelector((state) => state.MyFetches.artists);
  const allTheActivities = useSelector((state) => state.MyFetches.activities);
  useEffect(() => {
    dispatch(getArtistsAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allTheArtists.length]);
  useEffect(() => {
    dispatch(getActivitiesAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allTheActivities.length]);

  return (
    <div className="d-flex flex-column w-100 text-blue">
      <Container fluid className="text-center py-2 fs-6">
        {userLogged.name !== null ? <WelcomeActivityMessage /> : null}
      </Container>
      <div className="d-flex">
        <Container className="mx-2 py-2 shadow-sm">
          <h3>Artists/Bands: </h3>
          <div className="shadow">
            {allTheArtists.map((artist) =>
              artist.registered_mails.map((singleEmail) =>
                singleEmail === emailLogged ? (
                  <ArtistLink key={artist.id} artist={artist} />
                ) : null
              )
            )}
            <AddAnArtist />
          </div>
        </Container>
        <Container className="mx-2 py-2 shadow-sm">
          <h3>Activities: </h3>
          <div className="shadow rounded-3">
            {allTheActivities.map((activity) =>
              activity.registered_mails.map((singleEmail) =>
                singleEmail === emailLogged ? (
                  <ActivityLink key={activity.id} activity={activity} />
                ) : null
              )
            )}

            <AddAnActivity />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default ArtistActivityContent;
