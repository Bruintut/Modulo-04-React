import "./Home.css";
import CavaleiroLista from "components/CavaleiroLista/CavaleiroLista";
import album from "assets/icons/album.svg";
import logo from "assets/logo.svg";

function Home() {
  return (
    <div className="Home">
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
      <div className="Home__container">
        <CavaleiroLista />
      </div>
    </div>
  );
}

export default Home;