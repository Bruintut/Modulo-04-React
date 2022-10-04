import "./Home.css";
import CavaleiroLista from "components/CavaleiroLista/CavaleiroLista";
import Navbar from "components/Navbar/Navbar";
import AdicionaCavaleiroModal from "components/AdicionaCavaleiroModal/AdicionaCavaleiroModal";
import { useState } from "react";

function Home() {

  const [canShowAdicionaCavaleiroModal, setCanShowAdicionaCavaleiroModal] = useState(false);
  const [cavaleiroParaAdicionar, setCavaleiroParaAdicionar] = useState()

  return (
    <div className="Home">
      <Navbar createCavaleiro={() => setCanShowAdicionaCavaleiroModal(true)}/>  
      <div className="Home__container">
        <CavaleiroLista cavaleiroCriada={cavaleiroParaAdicionar} />
                {
                    canShowAdicionaCavaleiroModal && (
                    <AdicionaCavaleiroModal
                        closeModal={() => setCanShowAdicionaCavaleiroModal(false)}
                        onCreateCavaleiro={(cavaleiro) => setCavaleiroParaAdicionar(cavaleiro)} />
                    )
                }

        <CavaleiroLista />
        {
          canShowAdicionaCavaleiroModal && 
          <AdicionaCavaleiroModal 
            closeModal={() => setCanShowAdicionaCavaleiroModal(false)}
            onCreateCavaleiro={(cavaleiro) => setCavaleiroParaAdicionar(cavaleiro)} />
        }
        <AdicionaCavaleiroModal/>
      </div>
    </div>
  );
}

export default Home;