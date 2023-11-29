import { useSelector } from "react-redux";

const WelcomeActivityMessage = () => {
  const userLogged = useSelector((state) => state.LoggedIn.user[0]);
  return (
    <div className="text-white p-2 fs-4 fw-bold">
      Ciao,{" "}
      <span className="fst-italic fw-bold text-yellow">
        {userLogged.name}.{" "}
      </span>
      Attualmente sei un membro della/e Pagina/e:
    </div>
  );
};
export default WelcomeActivityMessage;
