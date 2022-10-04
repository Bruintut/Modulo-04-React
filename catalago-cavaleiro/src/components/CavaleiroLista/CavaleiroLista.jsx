import "./CavaleiroLista.css"
import { useState, useEffect } from "react"
import CavaleiroListaItem from "components/CavaleiroListaItem/CavaleiroListaItem";
import { CavaleiroService } from "services/CavaleiroService";

import CavaleiroDetalhesModal from "components/CavaleiroDetalhesModal/CavaleiroDetalhesModal";

function CavaleiroLista({ cavaleiroCriada }) {
    const [cavaleiros, setCavaleiros] = useState([]);

    const [cavaleiroSelecionado, setCavaleiroSelecionado] = useState({});

    const [cavaleiroModal, setCavaleiroModal] = useState(false);

    const adicionarItem = (cavaleiroIndex) => {
          const cavaleiro = { [cavaleiroIndex]: Number(cavaleiroSelecionado[cavaleiroIndex] || 0) +1 }
          setCavaleiroSelecionado({ ...cavaleiroSelecionado, ...cavaleiro});
    }

    const removerItem = (cavaleiroIndex) => {
        const cavaleiro = { [cavaleiroIndex]: Number(cavaleiroSelecionado[cavaleiroIndex] || 0) -1 }
        setCavaleiroSelecionado({...cavaleiroSelecionado, ...cavaleiro});
    }

    const getCavaleiroById = async (cavaleiroId) => {
        const response = await CavaleiroService.getById(cavaleiroId);
        setCavaleiroModal(response);
    };

    const adicionaCavaleiroNaLista = (cavaleiro) => {
        const lista = [...cavaleiros, cavaleiro];
        setCavaleiros(lista);
    };

    const getLista = async () => {
        const response = await CavaleiroService.getLista();
        setCavaleiros(response);
      };
      console.log(getLista)
      useEffect(() => {
        getLista();
      }, []);

    return (
        <div className="CavaleiroLista">
            {cavaleiros.map((cavaleiro, index) => (
                <CavaleiroListaItem 
                key={`CavaleiroListaItem-${index}`}
                cavaleiro={cavaleiro}
                quantidadeSelecionada={cavaleiroSelecionado[index]}
                index={index}
                onAdd={index => adicionarItem(index)}
			    onRemove={index => removerItem(index)}
                clickItem={(cavaleiroId) => getCavaleiroById(cavaleiroId)}/>
            
            ))}

            {cavaleiroModal && (
            <CavaleiroDetalhesModal 
            cavaleiro={cavaleiroModal} closeModal={() => 
                setCavaleiroModal(false)} />)}

        </div>
    );
}

export default CavaleiroLista;