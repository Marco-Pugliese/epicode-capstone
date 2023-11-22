import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const ArtistActivityContent = () => {
  const userLogged = useSelector((state) => state.LoggedIn.user[0]);
  return (
    <Container>
      {userLogged.name !== null ? (
        <div className="p-2">
          Ciao, <span className="fst-italic fw-bold">{userLogged.name}. </span>
          Attualmente sei un membro della/e Pagina/e:
        </div>
      ) : null}
    </Container>
  );
};
export default ArtistActivityContent;
