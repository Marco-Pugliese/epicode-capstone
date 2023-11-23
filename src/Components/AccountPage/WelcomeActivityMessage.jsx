import { useSelector } from "react-redux";

const WelcomeActivityMessage = () => {
  const userLogged = useSelector((state) => state.LoggedIn.user[0]);
  return (
    <div className="p-2">
      Ciao, <span className="fst-italic fw-bold">{userLogged.name}. </span>
      Attualmente sei un membro della/e Pagina/e:
    </div>
  );
};
export default WelcomeActivityMessage;
