import "./Home.css";
import CavaleiroLista from "components/CavaleiroLista/CavaleiroLista";
import Navbar from "components/Navbar/Navbar";
import AdicionaCavaleiroModal from "components/AdicionaCavaleiroModal/AdicionaCavaleiroModal";
import { useState } from "react";

function Home() {

  const [canShowAdicionaCavaleiroModal, setCanShowAdicionaCavaleiroModal] = useState(false);

  return (
    <div className="Home">
      <Navbar createCavaleiro={() => setCanShowAdicionaCavaleiroModal(true)}/>  
      <div className="Home__container">
        <CavaleiroLista />
        {
          canShowAdicionaCavaleiroModal && 
          (<AdicionaCavaleiroModal closeModal={() => setCanShowAdicionaCavaleiroModal(false)} />)
        }
        <AdicionaCavaleiroModal/>
      </div>
    </div>
  );
}

export default Home;