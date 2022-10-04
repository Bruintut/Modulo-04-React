import "./Navbar.css";
import album from "assets/icons/album.svg";
import logo from "assets/logo.svg";
import cavaleiro from "assets/icons/plus.svg";

function Navbar({ createCavaleiro }) {
  return (
    <div className="Home__header Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src={logo}
            width="70px"
            alt="Logo Cavaleiros"
            className="Logo__icone"
          />
          <span className="Logo__titulo"> Cavaleiros </span>
        </div>
        <div className="Header__opcoes Opcoes">
          <button
            type="button"
            className="Opcoes__cavaleiro Cavaleiro"
            onClick={() => createCavaleiro()}
          >
            <img
              src={cavaleiro}
              width="40px"
              className="Cavaleiro__icone"
              alt="Adiconar cavaleiro"
            />
          </button>
          <div className="Opcoes__album Album">
            <img
              src={album}
              width="40px"
              className="Album__icone"
              alt="Album de coleções"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
