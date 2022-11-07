import { useState } from "react";
import { ActionMode } from "constants/index";
import "./Home.css";
import CavaleiroLista from "components/CavaleiroLista/CavaleiroLista";
import Navbar from "components/Navbar/Navbar";
import AdicionaEditaCavaleiroModal from "components/AdicionaEditaCavaleiroModal/AdicionaEditaCavaleiroModal";
import Modal from "components/Modal/Modal";

function Home() {
  const [cavaleiroEditada, setCavaleiroEditada] = useState();
  const [canShowAdicionaCavaleiroModal, setCanShowAdicionaCavaleiroModal] =
    useState(false);
  const [cavaleiroParaAdicionar, setCavaleiroParaAdicionar] = useState();
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };
  const [cavaleiroParaEditar, setCavleiroParaEditar] = useState();
  const [cavaleiroParaDeletar, setCavleiroParaDeletar] = useState();
  const handleDeleteCavaleiro = (cavaleiroToDelete) => {
    setCavaleiroParaDeletar(cavaleiroToDelete);
  };

  const handleUpdateCavaleiro = (cavaleiroToUpdate) => {
    setCavaleiroParaEditar(cavaleiroToUpdate);
    setCanShowAdicionaCavaleiroModal(true);
  };

  const handleCloseModal = () => {
    setCanShowAdicionaCavaleiroModal(false);
    setCavaleiroParaAdicionar();
    setCavaleiroParaDeletar();
    setCavaleiroParaEditar();
    setModoAtual(ActionMode.NORMAL);
  };

  return (
    <div className="Home">
      <Navbar
        mode={modoAtual}
        createCavaleiro={() => setCanShowAdicionaCavaleiroModal(true)}
      />
      <div className="Home__container">
        <CavaleiroLista
          mode={modoAtual}
          cavaleiroCriado={cavaleiroParaAdicionar}
          cavaleiroEditada={cavaleiroEditada}
          deleteCavaleiro={handleDeleteCavaleiro}
          updateCavaleiro={handleUpdateCavaleiro}
        />
        {canShowAdicionaCavaleiroModal && (
          <AdicionaEditaCavaleiroModal
            mode={modoAtual}
            cavaleiroToUpdate={cavaleiroParaEditar}
            onUpdateCavaleiro={(cavaleiro) => setCavaleiroEditada(cavaleiro)}
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
