import { useState } from "react";
import { ActionMode } from "constants/index";
import "./Home.css";
import CavaleiroLista from "components/CavaleiroLista/CavaleiroLista";
import Navbar from "components/Navbar/Navbar";
import AdicionaEditaCavaleiroModal from "components/AdicionaEditaCavaleiroModal/AdicionaEditaCavaleiroModal";

function Home() {
  const [canShowAdicionaCavaleiroModal, setCanShowAdicionaCavaleiroModal] =
    useState(false);
  const [cavaleiroParaAdicionar, setCavaleiroParaAdicionar] = useState();
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  return (
    <div className="Home">
      <Navbar
        mode={modoAtual}
        createCavaleiro={() => setCanShowAdicionaCavaleiroModal(true)}
      />
      <div className="Home__container">
        <CavaleiroLista mode={modoAtual} cavaleiroCriado={cavaleiroParaAdicionar} />
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
