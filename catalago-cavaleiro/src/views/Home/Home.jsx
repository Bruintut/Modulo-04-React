import { useState } from "react";
import "./Home.css";
import CavaleiroLista from "components/CavaleiroLista/CavaleiroLista";
import Navbar from "components/Navbar/Navbar";
import AdicionaEditaCavaleiroModal from "components/AdicionaEditaCavaleiroModal/AdicionaEditaCavaleiroModal";

function Home() {
  const [canShowAdicionaCavaleiroModal, setCanShowAdicionaCavaleiroModal] =
    useState(false);
  const [cavaleiroParaAdicionar, setCavaleiroParaAdicionar] = useState();

  return (
    <div className="Home">
      <Navbar createCavaleiro={() => setCanShowAdicionaCavaleiroModal(true)} />
      <div className="Home__container">
        <CavaleiroLista cavaleiroCriado={cavaleiroParaAdicionar} />
        {canShowAdicionaCavaleiroModal && (
          <AdicionaCavaleiroModal
            closeModal={() => setCanShowAdicionaCavaleiroModal(false)}
            onCreateCavaleiro={(cavaleiro) =>
              setCavaleiroParaAdicionar(cavaleiro)
            }
          />
        )}

        <CavaleiroLista />
        {canShowAdicionaCavaleiroModal && (
          <AdicionaEditaCavaleiroModal
            closeModal={() => setCanShowAdicionaCavaleiroModal(false)}
            onCreateCavaleiro={(cavaleiro) =>
              setCavaleiroParaAdicionar(cavaleiro)
            }
          />
        )}
      </div>
    </div>
  );
}

export default Home;
