import "./Home.css";
import CavaleiroLista from "components/CavaleiroLista/CavaleiroLista";
import Navbar from "components/Navbar/Navbar";

function Home() {
  return (
    <div className="Home">
      <Navbar />  
      <div className="Home__container">
        <CavaleiroLista />
      </div>
    </div>
  );
}

export default Home;